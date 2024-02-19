import ThemeChanger from './component/ThemeChanger';
import './App.css';
import { TestContextProvider } from './context/textContext';
import AddTest from './component/AddTest';
import ShowTest from './component/ShowTest';
import { useEffect, useState } from 'react';

function App() {
  const test = {name:'SHi'}
  const addTest = () => {
    test.age = 10
  }
  const deleteTest = () => {
    console.log('delete')
  }
  const [data, setData] = useState()
  useEffect(() => {
    console.log('mounted')
    return console.log('unmounted')
  },[])
  return (
    <>
      
      <TestContextProvider value={{ test, addTest, deleteTest }}>
        <AddTest></AddTest>
        <ShowTest></ShowTest>
      </TestContextProvider>
      <input onChange={(e) => setData(e.target.value)}></input>
      <span>{data}</span>
      <br></br>
      <ThemeChanger></ThemeChanger>
    </>
  );
}

export default App;
