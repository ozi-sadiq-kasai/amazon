import { useState,useEffect,createContext } from "react"

// export context this will export this page
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
 const [products,setProducts] = useState([])

 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=> res.json())
  .then(json => setProducts(json))
 },[])
 
  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  )
}
export default ProductProvider