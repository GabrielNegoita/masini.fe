import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cars from './Cars.jsx'
import Contact from './Contact.jsx'
import CarSingle from './CarSingle.jsx'
import Navigation from './Navigation.jsx'
import Order from './Order.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="masini" element={<Cars />} />
        <Route path="masina/:id" element={<CarSingle />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="masina/order/:id" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
