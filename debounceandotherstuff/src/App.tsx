import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBar';
import Pract from './component/Pract';

function App() {
  return (
    <div className="App">
      <div>Test Debounce</div>
      <SearchBar></SearchBar>
      
      <Pract></Pract>
    </div>
  );
}

export default App;
