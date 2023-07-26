import React from "react";
import { useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function Navbar(){
    const myState=useSelector((state)=>state.changeNumber)
    return (
        <div className="pt-4 px-10 h-10 w-auto flex flex-row bg-white justify-between">
            <div className="flex flex-row gap-4">
                <span>Everything</span>
                <span>Plants</span>
                <span>Flowers</span>
            </div>
            <div className="flex flex-row gap-4">
                <span>About</span>
                <span>Contact</span>
                <span className="text-lime-400 text-sm">&#8377;{myState.price}.00</span>
                <span className="text-lime-400 text-sm"><Link to="/viewcart">{myState.quantity}</Link></span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

            </div>
        </div>
    )
}