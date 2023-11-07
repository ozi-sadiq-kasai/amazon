import { useState ,useEffect} from "react"
import { SlideImg } from '../../src/Data.js'


const Slider = ({slides}) => {

 const [current,setCurrent] =useState(0)
 const length = slides.length

 const nextSlide = () =>{
  setCurrent(current === length - 1 ? 0 : current + 1)
 }
 // const prevSlide =() =>{
 //  setCurrent(current === 0 ? length - 1 : current - 1)
 // }

 useEffect(() => {
   const intervalId = setInterval(nextSlide, 3000) // Advance to the next slide every 3 seconds

   return () => {
     clearInterval(intervalId) // Cleanup the interval on component unmount
   }
 }, [current])
if(!Array.isArray(slides) || slides.length === 0){
  return null // Return null if the slides are not provided or empty
}
  return (
    <section className="w-full">
      {SlideImg.map((slide, index) => {
        return (
          <div>
            {index === current && (
              <img
                src={slide.image}
                alt="slider"
                className="w-full h-96 max-sm:h-auto"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}
export default Slider