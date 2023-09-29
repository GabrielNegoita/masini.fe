import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import Application from './Application';


export const CartContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Application/>
  </React.StrictMode>,
)
