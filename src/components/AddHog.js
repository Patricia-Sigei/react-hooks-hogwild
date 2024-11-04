import React, { useState } from 'react';

const HogForm = ({ addNewHog }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState('');
  const [medal, setMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      greased,
      weight: parseFloat(weight),
      'highest medal achieved': medal,
      image,
    };
    addNewHog(newHog);
   
    setName('');
    setSpecialty('');
    setGreased(false);
    setWeight('');
    setMedal('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
      <label>
        Greased:
        <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      </label>
      <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      <input type="text" placeholder="Highest Medal Achieved" value={medal} onChange={(e) => setMedal(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
