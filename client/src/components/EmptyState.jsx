/**
 * EmptyState — shown when no tasks match the current filter
 */
const MESSAGES = {
  all: {
    icon: '📋',
    heading: 'No tasks yet',
    body: 'Add your first task above to get started!',
  },
  pending: {
    icon: '🎉',
    heading: 'All caught up!',
    body: 'No pending tasks. Enjoy your free time.',
  },
  completed: {
    icon: '⏳',
    heading: 'Nothing completed yet',
    body: 'Start checking off tasks to see them here.',
  },
};

const EmptyState = ({ filter }) => {
  const { icon, heading, body } = MESSAGES[filter] ?? MESSAGES.all;
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <span className="empty-state-icon" aria-hidden="true">{icon}</span>
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  );
};

export default EmptyState;
