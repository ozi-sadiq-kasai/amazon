import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

const Jewellry = () => {
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const filteredJewellryItem = products.filter((item) => {
    return item.category === 'jewelery'
  })

  const item = filteredJewellryItem.map((item) => (
    <section key={item.id} className="tiny:w-[300px] font-lato">
      <img src={item.image} alt={item.name} className="w-16 m-auto" />

      <h2 className="font-semibold leading-5 text-medium w-64">{item.title}</h2>
      <p className="">${item.price}</p>
      <div className="flex flex-col">
        <Link
          to={`/details/${item.id}`}
          className="hover:text-green-700 cursor-pointer text-sm"
        >
          more details
        </Link>
        <button
          className="bg-orange-300 text-slate-200 hover:text-orange-300 hover:bg-header py-1 w-44"
          onClick={() => addToCart(item, item.id)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  ))
  return (
    <main className="mt-28 flex flex-wrap gap-8 justify-around items-center pb-12 pt-2">
      {item}
    </main>
  )
}
export default Jewellry