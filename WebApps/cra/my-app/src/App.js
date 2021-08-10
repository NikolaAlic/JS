import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaCard } from './components/Pizza/Pizza';
import { StateTest } from './components/StateTest/StateTest';
import './App.scss';

function App() {
  return (
    // <PizzaCard
    //   name="Chicago pizza"
    //   image="/images/chicago-pizza.jpg"
    //   price={9}
    // />
    <StateTest />
  );
}

export default App;