import { Link } from "react-router-dom";

import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ShowData = ()=> {
    const { state } = useContext(Context) /* Forma 1 se tiver poucas propriedades */
    const data = useContext(Context) /* Forma 2 se tiver muitas propriedades, cria uma variavel e acessa por ela*/
    return(
        
        <div style={{backgroundColor: "purple", color: "white"}}>
            {state.car.map((carro)=>(
                <ul style={{listStyleType: 'none'}}>
                    <li>Marca: {carro.brand}</li>
                    <li>Preço: {carro.price}</li>
                    <li>ID: {carro.id}</li>
                </ul>
                ))}

            <button>
                <Link to='/'>Voltar para home</Link>
                <Link to='/register'>Cadastrar novo carro</Link>
            </button>
        </div>
    );
}