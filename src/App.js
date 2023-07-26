import React from "react";
import Product from "./components/product";
import Cart from "./components/cart";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Product/>
  },
  {
    path:'cart',
    element:<Product/>
  },
  {
    path:'viewcart',
    element:<Cart/>
  }

])

function App() {
  return (
    <div className="h-screen bg-lime-50"> 
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
