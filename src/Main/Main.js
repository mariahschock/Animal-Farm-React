import React from 'react';
import './Main.css';
import backgroundImage from '../background.png';
import AnimalCard from '../Animal-Card/Animal-Card';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      {
        animals.map((animal, i) => <AnimalCard key={animal.name + i} {...animal} />)
      }
    </main>
  );
}