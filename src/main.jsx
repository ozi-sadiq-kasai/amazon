import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './context/CartContext.jsx'
import ProductProvider from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
)