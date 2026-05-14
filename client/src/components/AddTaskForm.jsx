import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

/**
 * AddTaskForm — controlled input form to create a new task
 */
const AddTaskForm = ({ onAdd, submitting }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    await onAdd(value);
    setValue(''); // Clear input after submission
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} aria-label="Add new task">
      <input
        id="new-task-input"
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={300}
        autoComplete="off"
        disabled={submitting}
        aria-label="New task title"
      />
      <button
        id="add-task-btn"
        type="submit"
        className="btn btn-primary"
        disabled={submitting || !value.trim()}
        aria-label="Add task"
      >
        <FiPlus size={18} />
        {submitting ? 'Adding…' : 'Add'}
      </button>
    </form>
  );
};

export default AddTaskForm;
