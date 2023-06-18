import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type CartState = {
  cartItems: Product[];
  totalQuantity: number;
  totalAmount: number;
};

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.cartQuantity += 1;
      } else {
        const cartProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(cartProduct);
      }
    },
    removeCartProduct: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increaseCartQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);

      if (cartItem) {
        cartItem.cartQuantity += 1;
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.cartQuantity > 1) {
          cartItem.cartQuantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
    getTotalQuantity: (state) => {
      const totalQuantity = state.cartItems.reduce(
        (quantity, cartItem) => quantity + cartItem.cartQuantity,
        0
      );
      const totalAmount = state.cartItems.reduce(
        (amount, cartItem) => amount + cartItem.price * cartItem.cartQuantity,
        0
      );
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
