import React from 'react'

const Mobile = ({item,img,brand,title,desc,price,discount}) => {

    const addToCart = (event,item) => {
              event.preventDefault();
               console.log(item);
    }
    return (
        <div className="content border border-gray-600 rounded-2xl border-opacity-10 ">
            <img className="img h-72 w-72 object-contain mx-auto" src={img} alt={brand}/>
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{title}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{desc}</span>
            </div>
            <div className="flex justify-center items-center mt-4">
                <span className="bg-gray-200 px-4 rounded-full text-md mx-2">₹ {price }</span>
                <span className="bg-gray-200 px-4 rounded-full text-sm mx-2">{discount}% off</span>
            </div>
            <div className="justify-center mx-auto text-center mt-2">
                 <button onClick ={(e) => {addToCart(e,item)}} className=" bg-gray-700 text-white py-1 px-4 my-2 rounded-full font-bold">Add to cart</button>
            </div>
        </div>
    )
}

export default Mobile
