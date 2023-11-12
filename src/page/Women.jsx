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
      className="border p-10 flex w-[250px] h-[400px] max-tiny:w-screen font-lato"
    >
      <div className="flex flex-col justify-center align-center">
        <img src={item.image} alt={item.name} className="w-36 max-md:w-24" />
        <div className="mt-4">
          <h2 className="font-medium text-sm leading-5">{item.title}</h2>
          <p className="py-1">${item.price}</p>
          <Link to={`/details/${item.id}`}>
            <p>product details</p>
          </Link>
          <button
            className="bg-search py-1 px-3 text-slate-100 w-full m-auto"
            onClick={() => addToCart(item, item.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  ))
  return (
    <main className="flex justify-around items-center flex-wrap py-24 gap-8 max-tiny:p-4">
      {item}
    </main>
  )
}
export default Women
