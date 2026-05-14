/**
 * Skeleton loader shown while fetching todos
 */
const SkeletonCard = () => (
  <div className="skeleton" aria-hidden="true">
    <div className="skeleton-circle" />
    <div className="skeleton-content">
      <div className="skeleton-line" style={{ width: '70%' }} />
      <div className="skeleton-line" style={{ width: '40%' }} />
    </div>
  </div>
);

const SkeletonLoader = ({ count = 4 }) => (
  <div className="todo-list" aria-label="Loading tasks">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default SkeletonLoader;
