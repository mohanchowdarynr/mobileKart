import React, { useContext, useEffect, useState} from 'react'
import ProductContext from '../Context/ProductContext'
import CartItem from './CartItem';
import SaveItems from './SaveItems';

const Cart = () => {
    const [price,setPrice] = useState();
    const { cartItems,savedItems,saveLater,totalItems } = useContext(ProductContext);
    const cart = cartItems;
    const saved = saveLater;

    console.log(saved);
    useEffect(() => {
      setPrice(cart.reduce((acc, curr)=> acc + curr.price,0));
    },[cart])
    return (
        <div className="w-11/12 mx-auto min-h-screen">
        <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 text-center">Cart Items <span className="text-red-500">{totalItems}</span></h1>
        <div className="flex">
        <div className="mx-auto">
        { cart && cart.map((item)=> <CartItem item={item}/>)}
        </div>
        <div className="w-1/4 h-2/4 border border-gray-600 rounded-2xl border-opacity-10 ml-4 md:ml-0 mt-4 text-center py-3">
            <h1 className="font-medium md:font-bold ">Cart </h1>
            <h1 className="font-normal md:font-medium text-gray-700 tracking-wide">Cost : <span className="text-red-500">{price}</span></h1>
            <h1 className="font-normal md:font-medium text-gray-700 tracking-wide pb-2">Delivery : <span className="text-red-500">Free</span></h1>
            <h1 className="font-medium md:font-bold text-gray-700 tracking-wide border-t-2 border-opacity-8 py-2">Total : <span>{price}</span></h1>
            <button className="p-2 bg-red-500 text-gray-50 font-bold rounded">Confirm</button>
        </div>
        </div>
        <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 text-center">Saved Items <span className="text-red-500">{savedItems}</span> </h1>

        <div className="flex">
        <div className="mx-auto">
        { saved && saved.map((item)=> <SaveItems item={item}/>)}
        </div>
        </div>
        </div>
    )
}

export default Cart