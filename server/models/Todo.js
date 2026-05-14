const mongoose = require('mongoose');

/**
 * Todo Schema
 * Defines the structure for each task document in MongoDB
 */
const todoSchema = new mongoose.Schema(
  {
    // Task title - required, trimmed
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [1, 'Title cannot be empty'],
      maxlength: [300, 'Title cannot exceed 300 characters'],
    },

    // Completion status - defaults to false (pending)
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Automatically manage createdAt and updatedAt timestamps
    timestamps: true,
  }
);

module.exports = mongoose.model('Todo', todoSchema);
