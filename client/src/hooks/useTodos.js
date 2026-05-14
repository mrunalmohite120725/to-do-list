import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from '../services/todoService';

/**
 * useTodos — custom hook encapsulating all todo state and API interactions
 */
export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // ── Load all todos on mount ──────────────────
  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchTodos();
      setTodos(res.data.data);
    } catch {
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // ── Add a new todo ──────────────────────────
  const addTodo = useCallback(async (title) => {
    if (!title.trim()) return;
    try {
      setSubmitting(true);
      const res = await createTodo(title.trim());
      setTodos((prev) => [res.data.data, ...prev]);
      toast.success('Task added!');
    } catch (err) {
      const msg = err.response?.data?.errors?.[0] || 'Failed to add task';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }, []);

  // ── Edit a todo's title ──────────────────────
  const editTodo = useCallback(async (id, title) => {
    if (!title.trim()) return;
    try {
      const res = await updateTodo(id, title.trim());
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? res.data.data : t))
      );
      toast.success('Task updated!');
    } catch {
      toast.error('Failed to update task');
    }
  }, []);

  // ── Toggle completion ────────────────────────
  const toggleComplete = useCallback(async (id) => {
    try {
      const res = await toggleTodo(id);
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? res.data.data : t))
      );
      toast.success(res.data.message);
    } catch {
      toast.error('Failed to update status');
    }
  }, []);

  // ── Delete a todo ────────────────────────────
  const removeTodo = useCallback(async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t._id !== id));
      toast.success('Task deleted');
    } catch {
      toast.error('Failed to delete task');
    }
  }, []);

  return { todos, loading, submitting, addTodo, editTodo, toggleComplete, removeTodo };
};
