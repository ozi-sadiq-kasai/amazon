import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const Cart = () => {
const { cart, increaseQty, decreaseQty } = useContext(CartContext)
console.log(cart)
  return (
    <div className="mt-10">
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div className="flex items-center border w-12 justify-between">
            <AiOutlinePlus onClick={() => increaseQty(item.id)} />
            <p>{item.quantity}</p>
            <AiOutlineMinus onClick={() => decreaseQty(item.id)} />
          </div>
        </div>
      ))}
    </div>
  )
}
export default Cart