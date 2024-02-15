import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todoSlice'
function Todos() {
    const todos = useSelector((state) => (
        state.todos
    ))
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
                onClick={() => dispatch(updateTodo(todo.id))}
                >Update</button>
            </div>
        ))}
    </>

  )
}

export default Todos