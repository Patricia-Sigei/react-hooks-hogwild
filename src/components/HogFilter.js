import React from 'react';

const HogFilter = ({ isGreased, toggleGreasedFilter }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isGreased} onChange={toggleGreasedFilter} />
        Show Greased Hogs
      </label>
    </div>
  );
};

export default HogFilter;
