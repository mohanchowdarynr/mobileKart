import { addToCart, removeFromCart, saveForLater, moveToCart } from "./Types";
import { productsList } from "../dummyData";
import { useEffect, useReducer} from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = ({ children }) => {
  const initialState = {
    products: productsList,
    cartItems: getCartItems(),
    saveForLater: getSavedItems(),
    totalItems: 0,
    savedItems: 0,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  function getCartItems() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  }
  function getSavedItems() {
    let cart = localStorage.getItem("saved");
    if (cart) {
      return JSON.parse(localStorage.getItem("saved"));
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(state.saveForLater));
  }, [state.saveForLater]);

  const addCart = (item) => {
    state.totalItems = state.totalItems + 1;
    dispatch({ type: addToCart, payload: item });
  };
  const removeCart = (id) => {
    state.totalItems -= 1;
    dispatch({ type: removeFromCart, payload: id });
  };
  const saveCart = (item) => {
    state.totalItems -= 1;
    state.savedItems += 1;
    dispatch({ type: saveForLater, payload: item });
  };
  const moveCart = (item) => {
    state.savedItems -= 1;
    state.totalItems += 1;
    dispatch({ type: moveToCart, payload: item });
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems: state.cartItems,
        addCart,
        saveCart,
        removeCart,
        moveCart,
        totalItems: state.totalItems,
        saveLater: state.saveForLater,
        savedItems: state.savedItems,
        products: state.products,
        isAdded: state.isAdded,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductState;
