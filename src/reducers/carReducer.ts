import { reducerActionType } from "../types/reducerActionType";

export type CarType = {
    id: number, 
    brand: string, 
    price: number
}[]

export const carInitialState: CarType = [
    {id: 1, brand: 'Tesla', price: 69000},
    {id: 2, brand: 'Audi', price: 150000},
    {id: 3, brand: 'Ferrari', price: 500000},
]

export const carReducer = (state: CarType, action: reducerActionType) => {
    switch(action.type){
        case 'ADD_CAR':
            return [
                    ...state, {
                    id: action.payload.id, 
                    brand: action.payload.brand, 
                    price: action.payload.price 
                }
            ]

        case 'DEL_CAR':
           var newArray = state.filter((el)=>{
                el.id !== action.payload.id
            })
            return newArray;

        default:
            return state;
    }
}