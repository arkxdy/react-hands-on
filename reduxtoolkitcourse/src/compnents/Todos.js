import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todoSlice'
function Todos() {
    const todos = useSelector((state) => (
        state.todos
    ))
    const [update, setUpdate] = useState(false)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <div key={todo.id}>
                {todo.text}
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                >Delete</button>
                <button
                onClick={() => dispatch(updateTodo({
                    id:todo.id,
                    newVal:"Test"
                }))}
                >Update</button>
            </div>
        ))}
    </>

  )
}

export default Todos