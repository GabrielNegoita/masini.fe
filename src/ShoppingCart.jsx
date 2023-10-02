
import axios from "axios";
import { CartContext } from "./Application";
import Product from "./Product";
import {useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ShoppingCart(){

    let [cart,setCart] = useContext(CartContext);

    let emptyCart = true;

    for(let i = 0; i<= cart.length; i++){
        if(cart[i] > 0){
            emptyCart = false;
        }
    }
    if(emptyCart){
        return <h1>Cosul este gol</h1>
    }



    return(
        <>

            {             
                cart.map(function(v, i){
                    if (v > 0){
                        return <Product product_id = {i} quantity = {v}/>
                    }
                })
                
                
            }
            
            <Link className="actionButton" to="/order">Comanda</Link>
        </>
    );

}

export default ShoppingCart;