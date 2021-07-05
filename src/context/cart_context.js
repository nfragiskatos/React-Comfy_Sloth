import React, { useContext, useReducer } from "react";
import { ADD_TO_CART } from "../actions";
import reducer from "../reducers/cart_reducer";

const initialState = {
  cart: [],
  total_item: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        color,
        amount,
        product,
      },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
