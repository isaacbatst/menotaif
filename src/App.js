import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Calcule suas notas na Web
        </p>
        <Button type="primary">Butão</Button>
      </header>
    </div>
  );
}

export default App;
