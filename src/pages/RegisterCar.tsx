import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCarContext } from "../contexts/CarContext";

export const RegisterCar = () => {
  const { dispatch, cars } = useCarContext();
  const location = useLocation();
  const { search } = location;

  const cardId = search.replace("?carId=", "");
  // Vai ter somente se vier do EDIT
  const hasCardId = cardId !== "";

  const currentCar = hasCardId
    ? cars.filter((car) => car.id === parseFloat(cardId))[0]
    : null;

  const [brand, setBrand] = useState(currentCar?.brand || "");
  const [price, setPrice] = useState(currentCar?.price || 0);

  function registerCar() {
    if (hasCardId) {
      dispatch({
        type: "UPDATE_CAR",
        payload: {
          car: {
            id: parseFloat(cardId),
            brand,
            price,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_CAR",
        payload: {
          car: {
            brand,
            price,
          },
        },
      });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Cadastre seu carro</h2>
      <form
        style={{ color: "black" }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <span>Marca do carro</span>
        <input
          placeholder="Insira a marca"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <span>Preço</span>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
          }}
        />
        <button style={{ marginTop: "10px" }} onClick={registerCar}>
          {hasCardId ? "Edit Car" : "Add New Car"}
        </button>
      </form>

      <Link to="/exibir"> Mostrar os dados</Link>
    </div>
  );
};
