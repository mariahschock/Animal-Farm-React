// import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animals} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
