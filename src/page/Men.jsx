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
    <main 
    className="flex items-center h-screen justify-center flex-wrap gap-8 max-tiny:p-4 font-lato"
    >
      {filteredMenItem.map((item) => (
        <section
          key={item.id}
          className="flex w-[270px]] max-tiny:w-screen m-auto"
        >
          <div className="flex flex-col justify-center m-auto">
            <img src={item.image} alt={item.title} className="w-48 h-56 m-auto" />
            <h2 className="font-bold text-sm leading-5 w-1/2">
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
