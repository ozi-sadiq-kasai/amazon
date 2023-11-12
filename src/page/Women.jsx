import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

const Women = () => {
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const filteredWomenItem = products.filter((item) => {
    return item.category === "women's clothing"
  })
  
  const item = filteredWomenItem.map((item) => (
    <section
      key={item.id}
      className="flex w-[250px] h-[400px] justify-center items-center font-lato flex-col"
    >
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-48 h-56 max-md:w-24"
        />
        <h2 className="font-bold text-sm leading-5">{item.title}</h2>
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
  ))
  return (
    <main className="flex justify-around items-center flex-wrap py-24 gap-4 mt-5 max-tiny:p-4 ">
      {item}
    </main>
  )
}
export default Women
