import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'

const Cart = () => {
const { cart, increaseQty, decreaseQty, clearCart } = useContext(CartContext)

  return (
    <div className="mt-[110px] min-h-screen font-lato">
      <h2 className="text-slate-500 font-bold">Cart Items</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="justify-start items-center pl-8 pt-4 flex "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-40 h-52 max-md:w-24"
          />
          <div className="ml-5">
            <p className="mb-2">{item.title}</p>
            <p className="mb-2">${item.price}</p>
            <div className="flex items-center border w-20 justify-between cursor-pointer border-orange-200">
              <AiOutlineMinus onClick={() => decreaseQty(item.id)} />
              <p>{item.quantity}</p>
              <AiOutlinePlus onClick={() => increaseQty(item.id)} />
            </div>
          </div>
          <p className="ml-8 text-lg font-medium">
            total: ${parseFloat(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
      <p className="slate-200 text-slate-500 font-bold mt-10" >Clear Cart</p>
      <BsTrash3
        size={30}
        style={{ color: 'red',marginLeft:'10px',cursor:'pointer' }}
        onClick={() => {
          clearCart()
        }}
      />
    </div>
  )
}
export default Cart