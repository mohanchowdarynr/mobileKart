import React from 'react'

const initialState = {
   brands:[],
}

const FilterState = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <FilterContext.Provider
      value={{
        brands : state.brands
      }}
    >
      {children}
    </FilterContext.Provider>
    )
}

export default FilterState
