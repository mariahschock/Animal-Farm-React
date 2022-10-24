import React from 'react';
import './Main.css';
import backgroundImage from '../background.png';
import AnimalList from '../AnimalList';
export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <AnimalList animals={animals} />
      </div>
    </main>
  );
}