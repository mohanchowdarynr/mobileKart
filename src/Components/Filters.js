import React from 'react'

const Filters = () => {
    return (
        <div className="w-10/12 border-2 my-8 mr-5">
            <h3 className="text-center py-2 border-b-2">Filters</h3>
            <div className="flex flex-col pl-4 py-2 border-b-2">
               <input type="checkbox" /><p>samsung</p>          
               <input type="checkbox"/>          
               <input type="checkbox"/>          
               <input type="checkbox"/> 
            </div>
            <div className="pl-4 py-2">
                <h1>range</h1>
                <input type="range" />
            </div>      
        </div>
    )
}

export default Filters;
