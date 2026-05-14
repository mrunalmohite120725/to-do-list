import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

/**
 * Format a date string to a human-readable form
 */
const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * TodoCard — displays a single task with toggle, edit, delete actions
 */
const TodoCard = ({ todo, onToggle, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  // ── Save edited title ──────────────────────
  const handleSave = async () => {
    if (!editValue.trim() || editValue.trim() === todo.title) {
      setEditing(false);
      setEditValue(todo.title);
      return;
    }
    await onEdit(todo._id, editValue);
    setEditing(false);
  };

  // ── Cancel edit ────────────────────────────
  const handleCancel = () => {
    setEditValue(todo.title);
    setEditing(false);
  };

  // ── Handle Enter / Escape keys in edit mode ─
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <div
      className={`todo-card ${todo.completed ? 'completed' : ''}`}
      role="listitem"
      aria-label={`Task: ${todo.title}`}
    >
      {/* ── Checkbox ── */}
      <div className="checkbox-wrap">
        <button
          id={`toggle-${todo._id}`}
          className={`checkbox-btn ${todo.completed ? 'checked' : ''}`}
          onClick={() => onToggle(todo._id)}
          aria-label={todo.completed ? 'Mark as pending' : 'Mark as completed'}
          title={todo.completed ? 'Mark as pending' : 'Mark as completed'}
        >
          {todo.completed && <FiCheck strokeWidth={3} />}
        </button>
      </div>

      {/* ── Body ── */}
      <div className="todo-body">
        {editing ? (
          <>
            <input
              id={`edit-input-${todo._id}`}
              className="edit-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={300}
              autoFocus
              aria-label="Edit task title"
            />
            <div className="edit-actions">
              <button className="btn-save" onClick={handleSave} id={`save-${todo._id}`}>
                Save
              </button>
              <button className="btn-cancel" onClick={handleCancel} id={`cancel-${todo._id}`}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="todo-title">{todo.title}</p>
            <div className="todo-meta">
              <span
                className={`status-badge ${todo.completed ? 'done' : 'pending'}`}
                aria-label={`Status: ${todo.completed ? 'Completed' : 'Pending'}`}
              >
                {todo.completed ? '✓ Done' : '● Pending'}
              </span>
              <span aria-label={`Created at ${formatDate(todo.createdAt)}`}>
                {formatDate(todo.createdAt)}
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Actions ── */}
      {!editing && (
        <div className="todo-actions">
          <button
            id={`edit-${todo._id}`}
            className="icon-btn edit"
            onClick={() => setEditing(true)}
            aria-label="Edit task"
            title="Edit"
          >
            <FiEdit2 />
          </button>
          <button
            id={`delete-${todo._id}`}
            className="icon-btn delete"
            onClick={() => onDelete(todo._id)}
            aria-label="Delete task"
            title="Delete"
          >
            <FiTrash2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoCard;
