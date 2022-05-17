import { createContext, useReducer } from "react";
import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import {
  themeInitialState,
  ThemeType,
  themeReducer,
} from "../reducers/themeReducer";
// import { carReducer, carInitialState, CarType } from "../reducers/carReducer";

type initialStateType = {
  user: UserType;
  theme: ThemeType;
  // car: CarType;
};

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
  // car: carInitialState
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

/* -------------------------------------------------------------------------------*/
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  // Esse é um reducer que engloba todos os reducers
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
  // car: carReducer(state.car, action)
});

/* --------------------------------------------------------------------------------*/

type ComponentWithChildrenProps = {
  children: React.ReactNode;
};
export const ContextProvider = ({ children }: ComponentWithChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
