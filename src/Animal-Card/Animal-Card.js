import React from 'react';
import './Animal-Card.css';

export default function AnimalCard({ name, type, says, top, left }) {
  return (
    <div className="animal-card" style={{ top, left }}>
      <p>{name}</p>
      <img alt="animals" src={`/Animals/${type}.svg`} />
      <p>{type}</p>
      <p>{says}</p>
    </div>
  );
}