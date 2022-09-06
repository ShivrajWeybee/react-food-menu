import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Burgers } from './components/Burgers';
import { Chocolates } from './components/Chocolates';
import { Food } from './components/Food';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { IceCream } from './components/IceCream';
import { NavBar } from './components/NavBar';
import { Pizza } from './components/Pizza';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;