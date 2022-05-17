export type Car = {
  id: number;
  brand: string;
  price: number;
};

export type CarActions =
  | {
      type: "ADD_CAR";
      payload: {
        car: Omit<Car, "id">;
      };
    }
  | {
      type: "REMOVE_CAR";
      payload: {
        id: number;
      };
    }
  | {
      type: "UPDATE_CAR";
      payload: {
        car: Car;
      };
    };

export function carReducer(cars: Car[], action: CarActions) {
  switch (action.type) {
    case "ADD_CAR": {
      const { brand, price } = action.payload.car;

      return [
        ...cars,
        {
          brand,
          price,
          id: Math.random() * 100,
        },
      ];
    }
    case "REMOVE_CAR": {
      return cars.filter((car) => car.id !== action.payload.id);
    }
    case "UPDATE_CAR": {
      const { brand, id, price } = action.payload.car;

      return cars.map((car) => {
        if (car.id === id) {
          return {
            id,
            brand,
            price,
          };
        } else {
          return car;
        }
      });
    }
    default: {
      console.log("UNKNOWN ACTION TYPE", action);
      return cars;
    }
  }
}
