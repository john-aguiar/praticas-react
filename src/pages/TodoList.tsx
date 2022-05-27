import { useState } from "react"
import { useTodosContext } from "../contexts/TodosContext"

export const TodosList = () => {
    const context = useTodosContext();
    const { todos, dispatch } = context;

    function handleRemoveTodo(id: number){
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                id
            }
        })
    }

    return(
        <div>
            <h1>Todos List</h1>
            <input type="text" placeholder="Insira o seu TodoList"/>
            <ul>
                {todos.map((todo, index)=> (
                    <div className="list-item">
                        <li key={index}>{todo.text}</li>
                        <button onClick={()=>handleRemoveTodo}>Remove Todo</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}