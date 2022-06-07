import React from 'react';
import './Animal-Card.css';

export default function AnimalCard({ name, type, says }) {
  return (
    <div className="animal-card">
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img alt="animals" src={`/Animals/${type}.svg`} />
    </div>
  );
}