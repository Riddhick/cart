import React from "react";
import Navbar from "./navbar";
import plant from "../images/plant.jpg";
import { useDispatch, useSelector} from "react-redux";
import {removeItem} from "../action/index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cart(){
    const myState=useSelector((state)=>state.changeNumber)
    const dispatch=useDispatch();

    function handleChange(){
        dispatch(removeItem());
        toast.error('Item(s) Removed', {
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
    return(
        <div >
            <Navbar />
            <ToastContainer/>
            {myState.quantity>0?(
            <div className="p-10 flex flex-row h-80 ">
                <div className="py-6 basis-1/5  bg-white" >
                    <img className="" src={plant} alt="plant"></img>
                </div>
                <div className="basis-3/5 bg-lime-100 flex flex-col">
                    <div className="text-2xl font-bold mx-6 my-10">Mini Jade Plant</div>
                    <div className="mx-6 my-10 flex flex-col">
                        <span>Total:</span>
                        <span>{myState.quantity} X &#8377;199.00 = &#8377; {myState.price}.00</span>
                    </div>
                </div>
                <div className="basis-3/5 bg-lime-100 py-6 flex flex-col justify-end" >
                    <button className="bg-red-500 text-xs w-48 h-10 rounded " onClick={handleChange} >Remove From Cart</button>
                </div>
            </div>):<div className="flex flex-row justify-center pt-56">
                
                    <div className="text-3xl text-red-400"> Cart is Empty!!</div>
                </div>}
        </div>
    )
}