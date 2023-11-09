import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const Men = () => {
 const {products} = useContext(ProductContext)
 const filteredMenItem = products.filter((item)=>{
  return item.category === "men's clothing"
 })
 console.log(filteredMenItem)
 const item = filteredMenItem.map((item) => (
   <section
     key={item.id}
     className="border p-10 flex w-[250px] h-[350px] max-tiny:w-screen"
   >
     <div className='flex flex-col justify-center items-center'>
       <img src={item.image} alt={item.name} className="w-48 max-md:w-24" />
       <h2>{item.title}</h2>
       <p>${item.price}</p>
       <button>Add to Cart</button>
     </div>
   </section>
 ))
  return (
    <main className="flex justify-around items-center flex-wrap py-24 gap-8 max-tiny:p-4">
      {item}
    </main>
  )
}
export default Men