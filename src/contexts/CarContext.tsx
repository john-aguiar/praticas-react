import { createContext, useReducer, Dispatch, useContext } from "react";
import { carReducer, Car, CarActions } from "../reducers/carReducer";

type CarContextType = {
  cars: Car[];
  dispatch: Dispatch<CarActions>;
};

const CarContext = createContext<CarContextType | null>(null);

export function CarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cars, dispatch] = useReducer(carReducer, []);

  const context = {
    cars,
    dispatch,
  };

  return <CarContext.Provider value={context}>{children}</CarContext.Provider>;
}

export function useCarContext(): CarContextType {
  const context = useContext(CarContext);

  if (context === undefined) {
    throw new Error("useCarContext must be used within a CarContextProvider");
  }

  if (context === null) {
    throw new Error("Car context is null");
  }

  return context;
}
