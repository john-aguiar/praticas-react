export interface reducerActionType { 
    type: string,
    payload: {
        [key: string]: any;
    }
}
/*  
    reducerActionType is a generic type that represents the action type of the reducer.
    We only use this, if we haven't defined the specific action type in the reducer (like the type carActions).
*/