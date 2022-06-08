// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animalArray } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting="Welcome to" />
      <Main animals={animalArray} />
      <Footer email="animalfarm@alchemy.com" />
    </div>
  );
}

export default App;
