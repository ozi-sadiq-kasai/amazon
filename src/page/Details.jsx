import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import {CartContext} from '../context/CartContext'

const Details = () => {
  const [details, setDetails] = useState(null)
  const params = useParams()
  const {addToCart} = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Error fetching details:', error))
  }, [params.id])

  return (
    <div className="mt-28 text-center font-lato h-full">
      {details ? (
        <section
          key={details.id}
          className="flex justify-center items-center max-sm:flex-col mt-46"
        >
          <img
            src={details.image}
            alt={details.title}
            className="w-1/4 flex-1"
          />
          <div className="flex-2">
            <h1 className="font-semibold text-lg">{details.title}</h1>
            <p className="text-sm font-thin text-justify px-2">
              {details.description}
            </p>
            <button
              onClick={() => addToCart(details, details.id)}
              className="mt-3 bg-orange-300 text-slate-200 hover:text-orange-300 hover:bg-header py-1 w-44"
            >
              Add to Cart
            </button>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Details
