import React from 'react';

const HogSort = ({ handleSort }) => {
  return (
    <div>
      <button onClick={() => handleSort('name')}>Sort by Name</button>
      <button onClick={() => handleSort('weight')}>Sort by Weight</button>
    </div>
  );
};

export default HogSort;
