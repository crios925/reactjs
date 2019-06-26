import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductDetail productTitle={"Zapatillas"} price={1000} size={41}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
