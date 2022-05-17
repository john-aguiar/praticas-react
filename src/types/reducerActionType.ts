export interface reducerActionType {
    type: string,
    payload: {
        [key: string]: any;
    }
}