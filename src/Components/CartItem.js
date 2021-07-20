import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext';

const CartItem = ({item}) => {
    const { removeCart,saveCart } = useContext(ProductContext);
    return (
        <div>
           <div className="content flex border border-gray-600 rounded-2xl border-opacity-10 mt-4 py-4 ">
        <div className="left">
        <img className="img h-72 w-72 object-contain mx-auto" src={item.imageURL} alt={item.brand}/>
        </div>
        <div className="right justify-right items-center my-auto">
        <div className="text-center">
            <h2 className="text-lg font-bold py-2">{item.title}</h2>
        </div>
        <div className="flex justify-center items-center mt-4">
            <span className="bg-gray-200 px-4 rounded-full text-md mx-2">₹ {item.price }</span>
            <span className="bg-gray-200 px-4 rounded-full text-sm mx-2">{item.discount}% off</span>
        </div>
        <div className="justify-center mx-auto text-center mt-2">
                 <button onClick={() => saveCart(item)} className=" bg-red-500 text-white py-1 px-4 my-2 rounded-full font-bold">Save for Later</button>
        </div>
        <div className="justify-center mx-auto text-center mt-2">
                 <button onClick={() => removeCart(item.itemId)} className=" bg-gray-700 text-white py-1 px-4 my-2 rounded-full font-bold">Remove</button>
        </div>
        </div>
        </div> 
        </div>
    )
}

export default CartItem
