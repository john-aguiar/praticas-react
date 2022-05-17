import { reducerActionType } from '../types/reducerActionType'

export type UserType = {
    name: string,
    course: string,
    age: number;
}

export const userInitialState: UserType = {
    name: '',
    course: '',
    age: 0
}

export const userReducer = (state: UserType, action:reducerActionType) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name}
     
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age}
    
        case 'CHANGE_COURSE':
            return {...state, course: action.payload.course}
    }

    return state;
}