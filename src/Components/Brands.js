import React from 'react'
import { Link } from 'react-router-dom'

const Brands = ({img,brand}) => {
    return (
        <div className="content py-5 ">
                    <Link to="/ProductsPage">
                    <img  src={img} alt={brand}/>
                    <p className="text-xl text-center my-2">{brand}</p>
                    </Link>
        </div>
    )
}

export default Brands
