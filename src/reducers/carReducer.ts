// carReducer file for car store. Handles car actions.

export type Car = {  // Car is a type alias for an object
  id: number;
  brand: string;
  price: number;
};

export type CarActions =  { // CarActions is a type alias for actions of reducer carReducer
      type: "ADD_CAR";
      payload: {
        car: Omit<Car, "id">; // Omit<Car, "id"> is a type that removes the id property from the Car type
      };
    }
  | {
      type: "REMOVE_CAR"; // type: "REMOVE_CAR" is a type that removes the id property from the Car type
      payload: {
        id: number;
      };
    }
  | {
      type: "UPDATE_CAR";
      payload: { 
        car: Car; // Update the car with the new values
      };
    };

export function carReducer(cars: Car[], action: CarActions) {
  switch (action.type) {
    case "ADD_CAR": {
      const { brand, price } = action.payload.car; // Destructure the car object from the payload

      return [
        ...cars, // Return the old cars array with the new car object added
        {
          brand,  // Add the brand and price properties to the new car object
          price,
          id: Math.random() * 100,  // Generate a random id for the new car object
        },
      ];
    }
    case "REMOVE_CAR": {
      return cars.filter((car) => car.id !== action.payload.id); // Filter out the car with the id from the payload
    }
    case "UPDATE_CAR": {
      const { brand, id, price } = action.payload.car;

      return cars.map((car) => { // Map over the cars array and return the new car array
        if (car.id === id) { // If the car id is the same as the id from the payload, return the new car object
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
  }  //switch statement
} // carReducer function
