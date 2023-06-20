import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartProduct } from "../../type/types";

type CartState = {
  cartItems: CartProduct[];
  totalAmount: number;
};

const storedCartState = localStorage.getItem("cartState");
const initialState: CartState = storedCartState
  ? JSON.parse(storedCartState)
  : {
      cartItems: [],
      totalAmount: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.cartQuantity += 1;
      } else {
        const cartProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(cartProduct);
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeCartProduct: (state, action: PayloadAction<CartProduct>) => {
      const id = action.payload.id;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    increaseCartQuantity: (state, action: PayloadAction<CartProduct>) => {
      const id = action.payload.id;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    decreaseCartQuantity: (state, action: PayloadAction<CartProduct>) => {
      const id = action.payload.id;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex) {
        if (state.cartItems[cartItemIndex].cartQuantity > 1) {
          state.cartItems[cartItemIndex].cartQuantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    getTotalQuantity: (state) => {
      const totalAmount = state.cartItems.reduce(
        (amount, cartItem) => amount + cartItem.price * cartItem.cartQuantity,
        0
      );
      state.totalAmount = totalAmount;
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    checkOut: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartState");
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
