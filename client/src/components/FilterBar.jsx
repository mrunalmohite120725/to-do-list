/**
 * FilterBar — tab selector for All / Pending / Completed
 */
const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

const FilterBar = ({ active, onChange }) => (
  <div className="filter-bar" role="tablist" aria-label="Task filter">
    {FILTERS.map(({ key, label }) => (
      <button
        key={key}
        id={`filter-${key}`}
        role="tab"
        aria-selected={active === key}
        className={`filter-btn ${active === key ? 'active' : ''}`}
        onClick={() => onChange(key)}
      >
        {label}
      </button>
    ))}
  </div>
);

export default FilterBar;
