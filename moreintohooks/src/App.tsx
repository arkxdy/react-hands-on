import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reducer from './components/Reducer';
import Divide from './components/Divide';
import Memo from './components/Memo';
import TodoReducer from './components/TodoUsingUseReducer';

function App() {
  return (
    <>
      <Reducer></Reducer>
      <Divide></Divide>
      <TodoReducer/>
      <Divide></Divide>
      <Memo></Memo>
      <Divide></Divide>
    </>
  );
}

export default App;
