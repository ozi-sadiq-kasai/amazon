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
    <div className="mt-20 min-h-screen">
      <p>Details</p>
      {details ? (
        <section key={details.id}>
          <img src={details.image} alt={details.title} />
          <h1>{details.title}</h1>
          <p>{details.description}</p>
          <button onClick={()=>addToCart(details,details.id)}>Add to Cart</button>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Details
