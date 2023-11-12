import React, { useContext, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Slider from '../component/Slider'
import { SlideImg } from '../../src/Data.js'
import { motion } from 'framer-motion'
import { ProductContext } from '../context/ProductContext.jsx'

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])
  
   const slideAnimation = {
     hidden: { opacity: 0, x: -20 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
   }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={slideAnimation}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  const { products } = useContext(ProductContext)
  const filteredMen = products.filter(
    (item) => item.category === "men's clothing"
  )
  const menImg = filteredMen.map((item) => (
    <RevealOnScroll key={item.id}>
      <img src={item.image} alt={item.name} className="w-small" />
    </RevealOnScroll>
  ))

  const filteredWomen = products
    .filter((item) => item.category === "women's clothing")
    .slice(0, 4)
  const womenImg = filteredWomen.map((item) => (
    <RevealOnScroll key={item.id}>
      <img src={item.image} alt={item.name} className="w-small" />
    </RevealOnScroll>
  ))

  const filteredJewellery = products.filter(
    (item) => item.category === 'jewelery'
  )
  const jewelleryImg = filteredJewellery.map((item) => (
    <RevealOnScroll key={item.id}>
      <img src={item.image} alt={item.name} className="w-[100px]" />
    </RevealOnScroll>
  ))

  return (
    <main className="mt-16 font-lato">
      <Slider slides={SlideImg} />
      <section className="px-8">
        <h2>Men's Item</h2>
        <div className="flex flex-wrap border-b-2 border-gray-100 justify-around py-2 gap-9">
          {menImg}
        </div>
        <h2>Women's Item</h2>
        <div className="flex flex-wrap border-b-2 border-gray-100 justify-around py-2 gap-9">
          {womenImg}
        </div>
        <h2>Jewellery</h2>
        <div className="flex flex-wrap justify-around py-2 max-sm:justify-center max-sm:items-center gap-9">
          {jewelleryImg}
        </div>
      </section>
    </main>
  )
}

export default Home
