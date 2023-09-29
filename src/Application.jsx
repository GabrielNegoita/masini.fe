import { useState, createContext, useEffect } from "react";
import App from './App.jsx'
import Cars from './Cars.jsx'
import Contact from './Contact.jsx'
import CarSingle from './CarSingle.jsx'
import Order from './Order.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.jsx";

export const CartContext = createContext();
function Application() {

    const cart = useState([]);

    return (
        <>
        <CartContext.Provider value={cart}>
    
      
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="masini" element={<Cars />} />
                <Route path="masina/:id" element={<CarSingle />} />
                <Route path="contact" element={<Contact/>}/>
                <Route path="/order" element={<Order />} />
                <Route path="shoppingcart" element={<ShoppingCart />}/>
            </Routes>
            </BrowserRouter>
        </CartContext.Provider>
        </>
    )


}
export default Application;
