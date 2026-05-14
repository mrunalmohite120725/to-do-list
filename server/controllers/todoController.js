const crypto = require('crypto');

let todos = [];

const getAllTodos = async (req, res, next) => {
  try {
    // Return newest first
    const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.status(200).json({
      success: true,
      count: sortedTodos.length,
      data: sortedTodos,
    });
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const newTodo = {
      _id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    todos.push(newTodo);

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: newTodo,
    });
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const index = todos.findIndex(t => t._id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    todos[index].title = title;
    todos[index].updatedAt = new Date().toISOString();

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: todos[index],
    });
  } catch (error) {
    next(error);
  }
};

const toggleTodo = async (req, res, next) => {
  try {
    const index = todos.findIndex(t => t._id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    todos[index].completed = !todos[index].completed;
    todos[index].updatedAt = new Date().toISOString();

    res.status(200).json({
      success: true,
      message: `Task marked as ${todos[index].completed ? 'completed' : 'pending'}`,
      data: todos[index],
    });
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const index = todos.findIndex(t => t._id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    todos.splice(index, 1);

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
};
