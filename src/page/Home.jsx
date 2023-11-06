import { useContext } from "react"
import { ProductContext } from "../context/ProductContext.jsx"
import Slider from "../component/Slider"
import { SlideImg } from "../../src/Data.js"

const Home = () => {

 const {products} = useContext(ProductContext)
 const filteredMen = products.filter((item)=>{
          return item.category === "men's clothing" 
 }) 

 console.log(products)
const menImg = filteredMen.map(item =>(
 <img key={item.id} src={item.image} alt={item.name} />
))
 const filteredWomen = products.filter((item) => {
   return item.category === "women's clothing"
 })
 const womenImg = filteredWomen.map((item) => (
   <img key={item.id} src={item.image} alt={item.name} />
 ))
 const filteredJewellery = products.filter((item) => {
   return item.category === 
"jewelery"
 })
 const jewelleryImg = filteredJewellery.map((item) => (
   <img key={item.id} src={item.image} alt={item.name} />
 ))
  return (
    <main className="mt-4">
      <Slider slides={SlideImg} />
      {menImg}
      {womenImg}
      {jewelleryImg}
    </main>
  )
   
}
export default Home