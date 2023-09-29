
import {useContext, useEffect, useState } from 'react';
import { CartContext } from './Application';
import { Link } from 'react-router-dom';

function Navigation() {

    let [cart, setCart] = useContext(CartContext);

   
    function countCart(){
      let count = 0;
        
        for(let i=0; i<=cart.length; i++){
            if(cart[i]>0){
                count += cart[i];
            }
        }  

      return count;
     
    }

    function deleteCart(){
        if(confirm("Vrei sa stergi cosul de cumparaturi?")==true){
            setCart([]);
        }
    }

    return (
        <>
                  
            <div id="header">
                <div className="floatLeft" id="logoContainer">
                    <a href="">
                        <img src="porsche/public/img/logo.png"/>
                    </a>
                </div>
                <div className="floatLeft" id="nav">
                    <Link to="/masini"> Home </Link>
                    <a href="">Intrebari Frecvente</a>
                    <Link to="/contact"> Contact </Link>
                    <br/>
                    <Link to="/shoppingcart"> Cos de cumparaturi ( {countCart()} )</Link>
                    <br/>
                    <input onClick={deleteCart} type="button" name="sterge_cos" value="Goleste cosul"/>
                </div>
                <div className="clear"></div>
            </div>
        </>
       
    );
}
export default Navigation;