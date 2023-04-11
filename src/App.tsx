import React, { useState } from 'react';
import './App.css';

function App() {

  const handleIncrementCounter = () => {
    setCounter(count+1);
  }

  const handleResetCounter = () => {
    setCounter(0);
  }

  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Clique no botão abaixo para incrementar</h2>
        <p>Quantidade de Cliques: {count}</p>
        <div>
          <button onClick={handleIncrementCounter} className='btn'>Incrementar</button>
          <button onClick={handleResetCounter} className='btn btn__reset'>Resetar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
