import { createContext, useReducer, Dispatch, useContext } from "react";
import { carReducer, Car, CarActions } from "../reducers/carReducer";

type CarContextType = {
  cars: Car[];
  dispatch: Dispatch<CarActions>; // Dispatch é um tipo que recebe qualquer tipo de action do CarActions
};

const CarContext = createContext<CarContextType | null>(null); // null é o valor padrão do contexto

export function useCarContext(): CarContextType {  // useCarContext é um hook verifica se o contexto existe, caso sim, retorna o contexto, caso não, retorna um erro
  const context = useContext(CarContext); 

  if (context === undefined) { // Se não existir contexto, ou seja, se não tiver sido inicializado, ou seja, se não tiver sido usado em um componente que tenha o contexto
    throw new Error("useCarContext must be used within a CarContextProvider");
  }

  if (context === null) { 
    throw new Error("Car context is null");
  }

  return context;
}


export function CarContextProvider({ children }: {children: React.ReactNode}) {
  
  const [cars, dispatch] = useReducer(carReducer, []);
  const context = {
    cars,
    dispatch,
  };

  return <CarContext.Provider value={context}>  {children}  </CarContext.Provider>;
}