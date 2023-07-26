import React from "react";
import plant from "../images/plant.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../action/index"
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Product(){
    const dispatch = useDispatch()
    const navigate=useNavigate();
    const [getValue,setValue]=useState(1);
    
    function handleChange(event){
        setValue(event.target.value);
    }

    function handleSubmit(){
        const num=getValue;
        dispatch(addItem(num));
        toast.success('Item(s) added to Cart!!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    function routeChange(){
        const path='/cart'
        navigate(path)
    }
    return(
        <div>
            <Navbar/>
            <ToastContainer/>
        <div className="pt-0 p-2 flex flex-col gap-0">
            <hr className="w-11/12 h-1 mx-auto my-4 bg-lime-300 border-0 rounded md:my-10"></hr>
            <div className="flex flex-row justify-end pr-20">
                <button className="px-4 py-2 rounded bg-lime-500 text-xs" onClick={routeChange}>VIEW CART</button>
            </div>
            <div className="flex flex-row mt-4">
               <div className="basis-1/12 h-96 pl-8">
                <div className="bg-lime-500 rounded-full w-12 h-12 pl-2 pt-2">Sale!</div>
               </div>
               <div className="basis-5/12">
                <img className="mix-blend-multiply" src={plant} alt="plant"></img>
               </div>
               <div className="basis-6/12  flex flex-col gap-6">
                <div className="text-2xl font-semibold"> Mini Jade Plant</div>
                <div className="flex flex-row">
                    <span className="line-through text-gray-500">&#8377;299.00</span>
                    <span className="font-semibold">&#8377;199.00</span>
                    <span className="text-sm pt-1 pl-1"> + Free Shipping</span>
                </div>
                <div className="text-sm mr-56">The Crassula Green Mini has lush foliage taht beautifies any room and is one of the easiest indoor plants to care for. Bring some green home, and good fortune will come at no cost.</div>
                <div className="flex flex-row gap-4">
                    <input className="border-2 w-10 pl-3" type="text" value={getValue} onChange={handleChange} ></input>
                    <button className="bg-lime-500 text-xs w-56" onClick={handleSubmit}>Add To Cart</button>
               </div>
               <hr className="w-9/12 h-0.5  bg-gray-200 border-0 rounded "></hr>
               <div className="flex flex-row">
                <span>Categories:</span>
                <span className="ml-2 text-lime-400">Best Selling Product, Plant</span>
               </div>
               </div>
            </div>
        </div>
       </div> 
    )
};
