```
import { createContext } from "react";

type ContextType = {
    name: string,
    age: number
}

const initialState = {
    name: 'Joao',
    age: 22
}

export const Context = createContext<ContextType>(initialState);

interface Props {
    children?: React.ReactNode;
}

export const ContextProvider= ({ children }: Props) => {
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}
```