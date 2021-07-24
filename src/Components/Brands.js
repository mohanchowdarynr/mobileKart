import React from 'react'
import { Link } from 'react-router-dom'

const Brands = ({img,brand}) => {
    return (
        <div className="py-2 md:py-5">
                    <Link to="/ProductsPage">
                    <img className="object-contain md:object-scale-down" src={img} alt={brand}/>
                    <p className="text-sm md:text-xl text-center my-2">{brand}</p>
                    </Link>
        </div>
    )
}

export default Brands
