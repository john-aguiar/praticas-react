import { reducerActionType } from "../types/reducerActionType";


export type Todos = {
    id?: number;
    done?: boolean;
    text: string;
}

export type TodoActionsType = {
    type: "ADD_TODO",
    payload: {
        text: string;
        id: Omit<Todos, "id">
        done: Omit<Todos, 'done'>;
        } 
    }
    | {
    type: "REMOVE_TODO",
    payload: {
        id: number;
    }
    }
    | {
    type: 'EDIT_TODO',
    payload: {
        todo: Todos;
    }
    }


export function todoReducer(todos: Todos[], actions: TodoActionsType){
    switch(actions.type){
        case 'ADD_TODO': {
            return [
                ...todos, {
                text: actions.payload.text,
                id: actions.payload.id,
                done: actions.payload.done
            }]
        }
        case 'REMOVE_TODO': {
            return todos.filter((todo)=> todo.id !== actions.payload.id)
        }
        case 'EDIT_TODO': {
            const { text, id, done } = actions.payload.todo;

            return todos.map((todo)=> {
                if(todo.id === id){
                    return {
                        text: actions.payload.todo.text,
                        id: actions.payload.todo.id,
                        done: actions.payload.todo.done
                    }
                } else {
                    return todo;
                }
            });
        } default: {
            console.log('UNKNOWN ACTION TYPE', actions);
            return todos;
        }
    }
}
