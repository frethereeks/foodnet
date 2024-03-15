import { HiBars3CenterLeft, HiOutlineCog6Tooth } from "react-icons/hi2";

import Navbar from "../components/Navbar";
import FoodSwiper from "../components/FoodSwiper";
import Reviews from "../components/Reviews";


export default function Home() {

  return (
    <main className="flex flex-col relative bg-slate-100">
      <div className="flex relative bg-slate-900">
        <Navbar />
        <section className="relative bg-slate-900 pt-10 pb-20 px-4 flex flex-col gap-4">
          <label htmlFor="toggle" className="md:hidden absolute top-0 left-1 z-10 text-slate-100 cursor-pointer w-10 h-10 grid place-items-center">
            <HiBars3CenterLeft />
          </label>
          <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" className="py-1 px-2 text-green-700 uppercase text-[.6rem] font-bold bg-slate-800 w-max rounded-full">Everything for you</p>
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="text-white text-3xl sm:text-4xl md:text-6xl font-medium font-serif max-w-sm sm:max-w-md md:max-w-lg">Presenting our <span className="text-green-500">High-Flavored</span> Gastronomic Delights</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-slate-200 text-xs sm:text-sm max-w-sm">Embark on a flavour-filled adventure with our expertly crafted culinary delights. Our passionate chef ensure perfect balance in every dish</p>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="flex gap-4">
            <a href="/reservation" className="bg-orange-400 text-white py-2 px-6 rounded-full border border-orange-400 hover:bg-transparent hover:text-orange-400">Reservation</a>
            <a href="/menu" className="text-white py-2 px-6 rounded-full border border-transparent hover:border-slate-200 hover:text-slate-200 capitalize transition-all duration-500">explore menu</a>
          </div>
        </section>
      </div>
      <section className="py-20 relative px-4">
        <FoodSwiper />
      </section>
      <section className="py-20 relative px-4">
        <Reviews />
      </section>
      {/* <section className="py-20 relative px-4 bg-white">
        <h4 className="font-bold text-slate-800 text-xl md:text-2xl max-w-lg">Explore Lorem ipsum dolor sit amet consectetur adipisicing</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 py-5">
          <aside className="flex flex-col gap-3 justify-center bg-slate-100 p-6 hover:bg-blue-700 hover:h-[110%] -translate-y-[5%] transition-all duration-300 group">
            <HiOutlineCog6Tooth className="text-slate-700 group-hover:text-white" />
            <h5 className="font-semibold text-slate-700 group-hover:text-white">Sciences Engineering</h5>
            <p className="font-semibold text-slate-700 opacity-70 group-hover:text-white">Computer sciences are the Lorem ipsum dolor sit amet consectetur.</p>
          </aside>
        </div>
      </section> */}
    </main>
  )
}