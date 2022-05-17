import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from '../contexts/Context'


export const RegisterCar = ()=> {
    
    const {state, dispatch} = useContext(Context);

    let car_ID = state.car.length-1

    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState(0)


    function addNewCar(){
            dispatch({
                type: 'ADD_CAR',
                payload: {
                    brand: brand,
                    price: price,
                    id: car_ID
                }
            })                    
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h2>Cadastre seu carro</h2>
            <form style={{color: 'black'}}>
                <span>Marca do carro</span>
                <input placeholder="Insira a marca" type="text" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                <span>Preço</span>
                <input type="text" value={price} onChange={(e)=>{setPrice(parseInt(e.target.value))}}/>
                <button style={{marginTop: '10px'}} onClick={addNewCar}
                >Add New Car</button>
            </form>

            <Link to="/exibir"> Mostrar os dados</Link>
        </div>
    );
}