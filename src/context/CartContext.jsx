import React, { useState,useEffect, createContext } from 'react'

// Create the context
export const CartContext = createContext()

// Create the provider component
const CartProvider = ({ children }) => {
  // State for managing the cart
  const [cart, setCart] = useState([])
  // State for managing the quantity
  const [quantity, setQuantity] = useState(0)

  // FUNCTION TO ADD ITEM TO CART
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }

    // Check if the item is already in the cart
    const inCart = cart.find((item) => item.id === id)

    // Update the cart based on whether the item is already in it
    if (inCart) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCart(newCart)
      // console.log('Updated Cart:', newCart)
    } else {
      setCart((prevCart) => [...prevCart, newItem])
      // console.log('Updated Cart:', [...cart, newItem])
    }
  }

  // FUNCTION FOR TOTAL QUANTITY
  useEffect(() => {
    if (cart) {
      const totalQuantity = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity
      }, 0)
      setQuantity(totalQuantity)
    }
  }, [cart])

  // FUNCTION TO INCREASE QUANTITY
  const increaseQty = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    if (cartItem) {
      addToCart(cartItem, id)
    }
  }

  // FUNCTION TO DECREASE QUANTITY
const decreaseQty = (id)=>{
 const cartItem = cart.find(item => item.id === id)
 if (cartItem){
  const newCart = cart.map((item)=>{
   return {
    ...item,
    quantity: item.quantity - 1 > 0 ? item.quantity -1 : 0
   }
  })
  setCart(newCart)
 }
}





  return (
    <CartContext.Provider value={{ addToCart, cart, quantity, increaseQty,decreaseQty }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider