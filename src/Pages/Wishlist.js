import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SaveItems from "../Components/SaveItems";
import ProductContext from "../Context/ProductContext";

const Wishlist = () => {
  const { saveLater } = useContext(ProductContext);
  const saved = saveLater;

  if(saved.length <1){
    return (
    <div className="flex flex-col w-11/12 mx-auto min-h-screen">
    <div className="flex flex-col m-auto justify-center items-center">
    <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 mb-3">No saved items</h1>
    <Link to='/CartPage'>
    <button className="p-2 m-auto bg-red-500 text-gray-50">Add from Cart</button>
    </Link>
    </div>
    </div>
    )
  }
  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 text-center">
        Wishlist
      </h1>
      <div className="mx-auto min-h-screen">
        {saved && saved.map((item) => <SaveItems item={item} />)}
      </div>
    </div>
  );
};

export default Wishlist;
