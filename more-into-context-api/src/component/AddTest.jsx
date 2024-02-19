import React, { useState } from 'react'
import { useTest } from '../context/textContext'

function AddTest() {
    const [data, setData] = useState({
        name: 'Adi',
        age: 10,
    })
    const {test, deleteTest, addTest} = useTest();
    console.log('add test',test)
    const addFN = () => {
        console.log(addTest)
    }
  return (
    <div>
        AddTest
        <button onClick={addFN}>Add </button>
    </div>
  )
}

export default AddTest