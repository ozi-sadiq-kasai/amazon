import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'

const Cart = () => {
const { cart, increaseQty, decreaseQty, clearCart, grandTotal } = useContext(CartContext)

  return (
    <div className="mt-[95px] font-lato">
      <h2 className="text-slate-500 font-bold">Cart Items</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="justify-start items-center flex gap-4 mb-2"
        >
          <img src={item.image} alt={item.title} className="w-28 " />
          <div className=" flex-1">
            <p className="text-[13px]">{item.title}</p>
            <p>${item.price}</p>
            <div className="flex items-center border w-20 justify-between cursor-pointer border-orange-200">
              <AiOutlineMinus onClick={() => decreaseQty(item.id)} />
              <p>{item.quantity}</p>
              <AiOutlinePlus onClick={() => increaseQty(item.id)} />
            </div>
          </div>
          <p className="ml-8 text-[16px] font-medium flex-1">
            Total: ${parseFloat(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}{' '}
      <div className="uppercase font-semibold bg-orange-400 p-2">
        <span>Grand Total:</span> $ {parseFloat(grandTotal).toFixed(2)}
      </div>
      <BsTrash3
        size={30}
        style={{
          color: 'red',
          marginLeft: '10px',
          cursor: 'pointer',
          marginBottom: '40px',
        }}
        onClick={() => {
          clearCart()
        }}
      />
    </div>
  )
}
export default Cart