const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} = require('../controllers/todoController');
const validate = require('../middleware/validate');

/**
 * Input validation rules
 */
const titleValidation = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 300 }).withMessage('Title cannot exceed 300 characters'),
];

const idValidation = [
  param('id').notEmpty().withMessage('Invalid task ID'),
];

// ─────────────────────────────────────────────
// Route Definitions
// ─────────────────────────────────────────────

// GET    /api/todos        → Get all todos
router.get('/', getAllTodos);

// POST   /api/todos        → Create a new todo
router.post('/', titleValidation, validate, createTodo);

// PUT    /api/todos/:id    → Update todo title
router.put('/:id', [...idValidation, ...titleValidation], validate, updateTodo);

// PATCH  /api/todos/:id/toggle → Toggle completion
router.patch('/:id/toggle', idValidation, validate, toggleTodo);

// DELETE /api/todos/:id   → Delete a todo
router.delete('/:id', idValidation, validate, deleteTodo);

module.exports = router;
