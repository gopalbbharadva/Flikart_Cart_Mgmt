import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducers/CartReducer";

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
