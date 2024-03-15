import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs'
import { useContext } from "react";
import { GlobalContext } from "../context/AuthContext";

// React Fragment
export default function Header() {
    const {cart} = useContext(GlobalContext) 
    return (
        <>
            <header className="bg-slate-900 flex justify-between items-center p-4">
                <a href="/" className="text-orange-500 font-bold text-lg sm:text-2xl md:text-3xl">Food<span className="text-white">net</span></a>
                <div className="flex gap-3 items-center">
                    <Link to={"/cart"} className="relative text-white text-sm sm:text-base flex items-center gap-1 sm:gap-2 hover:bg-slate-800 rounded-3xl py-1 px-3"><BsCart4 className="text-lg" /> <span className="absolute top-0 left-5 w-4 h-4 sm:w-5 sm:h-5 rounded-3xl bg-orange-500 text-white text-xs sm:text-sm z-10 border border-slate-900 leading-[1] sm:leading-[15px] text-center">{cart.length}</span> Cart</Link>
                    <a href="/login" className="py-[.3rem] sm:py-2 sm:px-6 px-4 text-white border rounded-[2rem] text-xs bg-slate-800">Login</a>
                </div>
            </header>
        </>
    )
}
