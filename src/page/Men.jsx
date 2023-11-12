import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ProductContext } from "../context/ProductContext"
import {CartContext} from "../context/CartContext"

const Men = () => {
 const {products} = useContext(ProductContext)
 const {addToCart} = useContext(CartContext)

 const filteredMenItem = products.filter((item)=>{
  return item.category === "men's clothing"
 })

  return (
    <main className="flex flex-wrap items-center max-tiny:h-screen  mt-32 justify-center  font-lato max-tiny:mt-24  max-tiny:border-2 max-tiny:border-red-900">
      {filteredMenItem.map((item) => (
        <section
          key={item.id}
          className="flex w-[270px] max-tiny:w-screen border-1 border-red-900 m-auto max-tiny:pb-8"
        >
          <div className="flex flex-col justify-center border-2 border-green-900 w-full h-[450px] max-tiny:border-2 max-tiny:border-red-900 max-tiny:w-full max-tiny:m-auto">
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-56 m-auto max-tiny:w-36 max-tiny:h-auto "
            />
            <h2 className="font-bold text-sm leading-5  max-tiny:w-full">
              {item.title}
            </h2>
            <p className="py-1">${item.price}</p>
            <Link
              to={`/details/${item.id}`}
              className="font-light text-sm hover:text-orange-text text-slate-400 "
            >
              more details
            </Link>
            <button
              className="bg-search py-1 px-3 text-slate-100 w-full"
              onClick={() => addToCart(item, item.id)}
            >
              Add to Cart
            </button>
          </div>
        </section>
      ))}
    </main>
  )
}
export default Men
