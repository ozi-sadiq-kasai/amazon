import { useContext } from "react"
import { ProductContext } from "../context/ProductContext.jsx"
import Slider from "../component/Slider"
import { SlideImg } from "../../src/Data.js"
import { motion } from 'framer-motion'

const Home = () => {

 const {products} = useContext(ProductContext)
 const filteredMen = products.filter((item)=>{
          return item.category === "men's clothing" 
 }) 
const menImg = filteredMen.map((item) => (
  <img key={item.id} src={item.image} alt={item.name} className="w-small" />
))
 const filteredWomen = products.filter((item) => {
   return item.category === "women's clothing"
 }).slice(0,4)
 const womenImg = filteredWomen.map((item) => (
   <img key={item.id} src={item.image} alt={item.name} className="w-small" />
 ))
 const filteredJewellery = products.filter((item) => {
   return item.category === 
"jewelery"
 })
 const jewelleryImg = filteredJewellery.map((item) => (
   <img key={item.id} src={item.image} alt={item.name} className="w-[100px]" />
 ))
  return (
    <main className="mt-16">
      <Slider slides={SlideImg} />
      <section className="px-8">
        <h2>Men's Item</h2>
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 10 }}
          transition={{ duration: 5 }}
          className="flex flex-wrap border-b-2 border-gray-100 justify-around py-2 gap-9"
        >
          {menImg}
        </motion.div>
        <h2>Women's Item</h2>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 10 }}
          transition={{ duration: 4 }}
          className="flex flex-wrap border-b-2 border-gray-100 justify-around py-2 gap-9"
        >
          {womenImg}
        </motion.div>
        <h2>Jewellery</h2>
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 10 }}
          transition={{ duration: 5 }}
          className="flex  flex-wrap justify-around py-2 max-sm:justify-center max-sm:items-center gap-9"
        >
          {jewelleryImg}
        </motion.div>
      </section>
    </main>
  )
   
}
export default Home