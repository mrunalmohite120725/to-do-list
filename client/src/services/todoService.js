import axios from 'axios';

// Axios instance — base URL proxied by Vite
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Fetch all todos from the server
 */
export const fetchTodos = () => api.get('/todos');

/**
 * Create a new todo
 * @param {string} title
 */
export const createTodo = (title) => api.post('/todos', { title });

/**
 * Update an existing todo's title
 * @param {string} id
 * @param {string} title
 */
export const updateTodo = (id, title) => api.put(`/todos/${id}`, { title });

/**
 * Toggle completed status
 * @param {string} id
 */
export const toggleTodo = (id) => api.patch(`/todos/${id}/toggle`);

/**
 * Delete a todo by ID
 * @param {string} id
 */
export const deleteTodo = (id) => api.delete(`/todos/${id}`);
