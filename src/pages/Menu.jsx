import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { FaHeart } from 'react-icons/fa';
import { allFoodsData } from '../data/allFoodsData';

export default function Menu() {
  const [allFoods, setAllFoods] = useState(allFoodsData)
  const [sortedFoods, setSortedFoods] = useState(allFoodsData)
  const [category, setCategory] = useState("All")
  const [allCategories, setAllCategories] = useState([])
  

  useEffect(() => {
    const getCategories = () => {
      const uniqueCategories = new Set()
      allFoods.map(el => { uniqueCategories.add(el.category) })
      setAllCategories(Array.from(uniqueCategories))
    }
    getCategories()
  },[allFoods])

  const handleAddToCart = id => {
    const findProduct = allFoods.find(food => food.id === id)

  }
  const handleLikes = id => {
    console.log({id})
  }

  const handleSortCategory = category => {
    if(category === "All") setSortedFoods(prev => [...allFoods])
    else {
      const matchFoods = allFoods.filter(el => el.category === category)
      setSortedFoods(prev => [...matchFoods])
    }
    setCategory(category)
  }


  return (
    <main className="flex flex-col bg-[#f7faff]">
      <div className="flex relative bg-slate-900 pb-32 after:absolute after:bg-[#f7faff] after:top-[65%] after:left-0 after:w-full after:h-1/2 after:-skew-y-3">
        <Navbar />
        <section className="relative bg-slate-900 pt-10 pb-20 px-4 flex flex-col gap-4">
          <label htmlFor="toggle" className="md:hidden absolute top-0 left-1 z-10 text-slate-100 cursor-pointer w-10 h-10 grid place-items-center">
            <HiBars3CenterLeft />
          </label>

          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="text-white text-3xl sm:text-4xl md:text-6xl font-medium font-serif max-w-lg sm:max-w-2xl">Explore our <span className="text-green-500">Rich and Exotic</span> Delicacies from all over the World</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-[#f7faff] text-sm sm:text-base max-w-xl leading-loose">It does not matter what you like, how you like, and where you like it, we are always on hand to deliver according to your wish and taste</p>

        </section>
      </div>
      <section className="container mx-auto flex flex-col gap-6 bg-[#f7faff] relative z-10 pb-10 pt-5 px-4 -mt-20">
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => handleSortCategory("All")} className={`${category === "All" ? "bg-orange-400 text-white" : "hover:bg-transparent hover:text-orange-400 text-orange-400"} py-2 px-6 rounded-full border border-orange-400  capitalize whitespace-nowrap w-32`}>All</button>
          {
            allCategories.map((el) => <button onClick={() => handleSortCategory(el)} key={el} className={`${category === el ? "bg-orange-400 text-white" : "hover:bg-transparent hover:text-orange-400 text-orange-400"} py-2 px-6 rounded-full border border-orange-400  capitalize whitespace-nowrap w-32`}>{el}</button>)
          }
          
          
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 justify-items-center container mx-auto">
          {
            sortedFoods.map(food => <aside key={food.id} className="flex flex-col rounded-md overflow-hidden hover:shad drop-shadow-xl bg-white max-w-[16rem] ">
              <div className="relative flex overflow-hidden h-24 sm:h-36">
                <img src={food.images[0]} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col p-3 pt-2">
                  <h5 className="font-serif capitalize text-sm sm:text-base md:text-lg text-slate-700 font-semibold" style={{lineHeight: '20px'}}>{food.name}</h5>
                  <div className="flex justify-between items-center gap-3 pt-2">
                    <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" className="py-1 px-4 text-green-700 uppercase text-[.6rem] font-bold bg-green-400 w-max rounded-full">{food.category}</p>
                    <p className="text-sm sm:text-base text-slate-500">&#8358;{food.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-4 p-3 pt-2">
                  <button onClick={() => handleLikes(food.id)} className="hover:bg-orange-400 hover:text-white w-7 h-7 md:w-8 md:h-8 rounded-full grid place-items-center border border-orange-400 bg-transparent text-orange-400">
                    <FaHeart />
                  </button>
                  <button onClick={() => handleAddToCart(food.id)} className="flex-1 bg-orange-400 text-white py-1 px-6 rounded-full border border-orange-400 hover:bg-transparent hover:text-orange-400 whitespace-nowrap">Add to Cart</button>
                </div>
              </div>
            </aside>)
          }

        </div>
      </section>
    </main>
  )
}
