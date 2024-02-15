import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/todoSlice'

function AddTdod() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
        <form onSubmit={addTodoHandler}>
            <input
            value={input}
            type='text'
            placeholder='Enter'
            onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
            type='submit'
            >Submit</button>
        </form>
    </>
  )
}

export default AddTdod