import { useState,useEffect } from "react"
import Slider from "../component/Slider"
import { SlideImg } from "../../src/Data.js"

const Home = () => {

 const [displayImg,setDisplayImg] = useState([])
   useEffect(() => {
     fetch('https://fakestoreapi.com/products')
       .then((res) => res.json())
       .then((json) => setDisplayImg(json))
   }, [])
   console.log(displayImg)
   
  return (
    <main className="mt-4">
      <Slider slides={SlideImg} />
      <section>
       <img src="" alt="" />
      </section>
      <h1>Home page here</h1>
   
    </main>
  )
   
}
export default Home