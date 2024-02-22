import { count } from "console";
import { useReducer, useState } from "react";
interface State{
    count: number;
    error: string | null;
}
interface Action {
    type: 'increment' | 'decrement' | 'incrementByValue';
    value: number | undefined;
}
function reducer(state: State, action: Action){
    const {type} = action;
    let newCount:number = 0;
    switch (type){
        case 'increment':
            newCount = state.count + 1;
            return {
                count: newCount,
                error:null
            }
        case "decrement":
            newCount = state.count-1;
            return {
                count: newCount,
                error: null
            }
        case "incrementByValue":
            newCount = action.value!==undefined? action.value : 0;
            return{
                count : newCount,
                error : null
                
            }
        default:
            return state;
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer,{
        count:0,
        error:null,
    });
    const [input, setValue] = useState<number>();
    return (
        <>
            <h1>useReducer</h1>
            <div>
                <input
                type="text"
                value={input}
                placeholder="Enter Value"
                onChange={(e) => setValue(parseInt(e.target.value))}
                ></input>
                <button
                onClick={() => {
                    dispatch({type:'incrementByValue', value:input})
                }}
                >Submit</button>
            </div>
            <div>
            <button
                onClick={() => {
                    dispatch({type:'increment', value:0})
                }}
                >Inceament</button>
                <button
                onClick={() => {
                    dispatch({type:'decrement', value:0})
                }}
                >Decrement</button>
            </div>
            <h3>New Value : {state.count}</h3>
        </>
    )
}
export default Reducer;