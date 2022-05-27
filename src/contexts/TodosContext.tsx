import React, {  createContext, useContext, useReducer } from "react";
import { Todos, todoReducer, TodoActionsType } from "../reducers/todoReducer";


type TodosContextType = {
    todos: Todos[],
    dispatch: React.Dispatch<TodoActionsType>
}

const TodosContext = createContext<TodosContextType | null>(null);


export function useTodosContext(): TodosContextType {
    const context = useContext(TodosContext);

    if(context === undefined){
        throw new Error('useTodosContext must be used within a TodosContextProvider');
    }
    if(context === null){
        throw new Error('Todos context is null');
    }
    return context;
}
/* ********************************************* */
/* ******************************************** */
type ComponentWithChildrenProps = {
    children: React.ReactNode;
}

export const TodosContextProvider =  ({children}: ComponentWithChildrenProps) => {

    const [todos, dispatch] = useReducer(todoReducer, []);
    const context ={
        todos, dispatch
    }

    return(
        <TodosContext.Provider value={ context}>
            {children}
        </TodosContext.Provider>
    )
}