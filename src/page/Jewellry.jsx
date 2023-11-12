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
    <section
      key={item.id}
      className="border p-10 flex w-[200px] h-[300px] max-tiny:w-screen font-lato"
    >
      <div className="flex flex-col justify-center align-center">
        <img src={item.image} alt={item.name} className="w-16 max-md:w-24" />
        <div className="mt-4">
          <h2 className="font-medium text-sm leading-5 w-[150px]">
            {item.title}
          </h2>
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
export default Jewellry