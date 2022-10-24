import React from 'react';
import AnimalCard from './Animal-Card/Animal-Card';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {
        animals.map((animal, i) => <AnimalCard key={animal.name + i} {...animal} />)
      }
    </div>
  );
}
