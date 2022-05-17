import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { Context } from "../contexts/Context";
import { useCarContext } from "../contexts/CarContext";

export const ShowData = () => {
  const { state } =
    useContext(Context); /* Forma 1 se tiver poucas propriedades */
  const data =
    useContext(
      Context
    ); /* Forma 2 se tiver muitas propriedades, cria uma variavel e acessa por ela*/
  const { cars, dispatch } = useCarContext();
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "purple", color: "white" }}>
      {cars.map((car) => (
        <ul style={{ listStyleType: "none" }} key={car.id}>
          <li>Marca: {car.brand}</li>
          <li>Preço: {car.price}</li>
          <li>ID: {car.id}</li>
          <li>
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_CAR",
                  payload: {
                    id: car.id,
                  },
                });
              }}
            >
              DELETE
            </button>
            <button
              onClick={() => {
                navigate(`/register?carId=${car.id}`);
              }}
            >
              EDIT
            </button>
          </li>
        </ul>
      ))}

      <button>
        <Link to="/">Voltar para home</Link>
        <Link to="/register">Cadastrar novo carro</Link>
      </button>
    </div>
  );
};
