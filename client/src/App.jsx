import { useState, useMemo } from 'react';
import { useTodos } from './hooks/useTodos';
import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';
import TodoCard from './components/TodoCard';
import EmptyState from './components/EmptyState';
import SkeletonLoader from './components/SkeletonLoader';

/**
 * App — root component
 * Manages filter state and composes all child components
 */
const App = () => {
  const [filter, setFilter] = useState('all');
  const { todos, loading, submitting, addTodo, editTodo, toggleComplete, removeTodo } = useTodos();

  // ── Derive filtered list without mutating state ──
  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((t) => t.completed);
    if (filter === 'pending')   return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  // ── Stats ────────────────────────────────────────
  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount   = todos.length - completedCount;

  return (
    <div className="app-wrapper">
      <main className="container" role="main">

        {/* ── Header ── */}
        <header className="header">
          <div className="header-icon" aria-hidden="true">✓</div>
          <h1>Tasky</h1>
          <p>Stay focused, stay organised.</p>
        </header>

        {/* ── Add Task Form ── */}
        <AddTaskForm onAdd={addTodo} submitting={submitting} />

        {/* ── Filter Tabs ── */}
        <FilterBar active={filter} onChange={setFilter} />

        {/* ── Stats Bar ── */}
        {!loading && todos.length > 0 && (
          <div className="stats-bar" aria-live="polite">
            <p className="stats-text">
              <span>{pendingCount}</span> pending · <span>{completedCount}</span> completed
            </p>
            <p className="stats-text">
              <span>{filteredTodos.length}</span> shown
            </p>
          </div>
        )}

        {/* ── Task List ── */}
        {loading ? (
          <SkeletonLoader count={4} />
        ) : filteredTodos.length === 0 ? (
          <EmptyState filter={filter} />
        ) : (
          <div className="todo-list" role="list" aria-label="Task list">
            {filteredTodos.map((todo) => (
              <TodoCard
                key={todo._id}
                todo={todo}
                onToggle={toggleComplete}
                onEdit={editTodo}
                onDelete={removeTodo}
              />
            ))}
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
