import * as React from "react"
import './App.css';
import Cards from './components/Cards';

function App() {

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <h3>Rules:</h3>
      <p>Find the Card that has the same image as the one you selected.</p>
      <div className="main">
        <Cards />
      </div>
    </div>
  );
}

export default App;
