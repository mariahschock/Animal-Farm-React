// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import { animalArray } from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animalArray} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
