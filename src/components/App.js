import React, { useState } from 'react';
import hogs from '../porkers_data'; 
import Nav from './Nav';
import HogTile from './HogTile';
import HogDetails from './HogDetail';
import HogFilter from './HogFilter';
import HogSort from './HogSort';
import HogForm from './AddHog';

const App = () => {
  const [hogsData, setHogsData] = useState(hogs);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [showDetails, setShowDetails] = useState(null);
  const [isGreased, setIsGreased] = useState(false);

  const toggleGreasedFilter = () => setIsGreased(!isGreased);

  const handleSort = (sortBy) => {
    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });
    setFilteredHogs(sortedHogs);
  };

  const addNewHog = (newHog) => {
    setHogsData([...hogsData, newHog]);
    setFilteredHogs([...hogsData, newHog]);
  };

  const handleHogClick = (hog) => {
    setShowDetails(hog);
  };

  const handleHideHog = (name) => {
    setFilteredHogs(filteredHogs.filter(hog => hog.name !== name));
  };

  React.useEffect(() => {
    if (isGreased) {
      setFilteredHogs(hogsData.filter(hog => hog.greased));
    } else {
      setFilteredHogs(hogsData);
    }
  }, [isGreased, hogsData]);

  return (
    <div>
      <Nav />
      <HogFilter isGreased={isGreased} toggleGreasedFilter={toggleGreasedFilter} />
      <HogSort handleSort={handleSort} />
      <div className="ui grid container">
        {filteredHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} onClick={handleHogClick} onHide={handleHideHog} />
        ))}
      </div>
      {showDetails && <HogDetails hog={showDetails} onClose={() => setShowDetails(null)} />}
      <HogForm addNewHog={addNewHog} />
    </div>
  );
};

export default App;
