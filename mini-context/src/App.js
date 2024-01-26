import logo from './logo.svg';
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>Context API</h1>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </div>
  );
}

export default App;
