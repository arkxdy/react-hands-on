import { error } from "console";
import { useId, useReducer, useState } from "react";

const todoListData:Todo[] = [{title:"1",data:"Test 1"},
                        {title:"2",data:"Test 2"},
                        {title:"3",data:"Test 3"},
                        {title:"4",data:"Test 4"}];

function todoReducer (state: State, action: Action) {
    const { type } = action;
    switch (type){
        case 'Add' : 
            state.todoList.push(action.todoList);
            return {
                todoList: state.todoList,
                error: null
            }
        case 'Delete' :
            const id = action.todoList.title;
            return {
                todoList: state.todoList.filter((todoListItem) => todoListItem.title !== id),
                error: null
            }
        case 'Edit' :
            console.log(state);
            return {
                todoList: todoListData,
                error: null
            }
        default:
            return state
    }   
}

const TodoReducer = () => {
    const [state, dispacth] = useReducer(todoReducer,{
        todoList: todoListData,
        error : null,
        
    });
    const [title, setTitle] = useState<string>("");
    const [todoValue, setTodoValue] = useState<string>("");
    return (
        <>
            <h1>TODO useReducer</h1>
            <div>
                <input value='Title' type="none" disabled></input>
                <input value='Todo' type="none" disabled></input>
            </div>
            <div>
                <input
                value={title}
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                value={todoValue}
                placeholder="Enter Todo"
                onChange={(e) => setTodoValue(e.target.value)}
                ></input>
                <button
                onClick={() => {
                    dispacth({type:'Add', todoList:{title:title, data:todoValue}})
                }}
                >Add</button>
            </div>
            <div>
                {state.todoList === null ? 'Null':state.todoList.map((todoItem) => 
                    <div key={todoItem.title}><b>{todoItem.data}</b><button
                    onClick={() => {
                        dispacth({type: 'Delete', todoList:{title:todoItem.title, data:todoItem.data}})
                    }}
                    >Delete</button></div>
                )}
                
            </div>
        </>
    )
}
export default TodoReducer;

interface Todo{
    title: string,
    data:string,
}
interface Action{
    type: 'Add' | 'Edit' | 'Delete',
    todoList : Todo,
}
interface State{
    todoList : Todo[],
    error: null,
}