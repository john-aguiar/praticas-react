import { useState } from "react"
import { useTodosContext } from "../contexts/TodosContext"

export const TodosList = () => {
    
    const { todos, dispatch } = useTodosContext();
    
    return(
        <div>
            <h1>Todos List</h1>
            <input type="text" placeholder="Insira o seu TodoList"/>
            <ul>
                {todos.map((todo)=> (
                    <div key={todo.id} className="list_item">
                        <li >Tarefa: {todo.text}</li>
                        <button onClick={()=> {
                            dispatch({
                                type: 'REMOVE_TODO',
                                payload: {
                                    id: todo.id,
                                    }
                            })
                        }}>Remove Todo</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}