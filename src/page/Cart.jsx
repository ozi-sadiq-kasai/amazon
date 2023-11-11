import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'


const Cart = () => {
const { cart, increaseQty, decreaseQty, clearCart } = useContext(CartContext)
console.log(cart)
  return (
    <div className="mt-[130px] min-h-screen">
      <h2 className="text-center mt-10">My Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <p>Total:${parseFloat(item.price * item.quantity).toFixed(2)}</p>
          <div className="flex items-center border w-12 justify-between">
            <AiOutlinePlus onClick={() => increaseQty(item.id)} />
            <p>{item.quantity}</p>
            <AiOutlineMinus onClick={() => decreaseQty(item.id)} />
          </div>
        </div>
      ))}
      <BsTrash3
        onClick={() => {
          clearCart()
        }}
      />
    </div>
  )
}
export default Cart