import logo from './logo.svg';
import './App.css';
import AddTdod from './compnents/AddTdod';
import Todos from './compnents/Todos';

function App() {
  return (
    <div className="App">
      <AddTdod></AddTdod>
      <Todos></Todos>
    </div>
  );
}

export default App;
