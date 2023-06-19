import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Cart } from "../../type/types";

type CartState = {
  cartItems: Cart[];
  totalAmount: number;
};

const initialState: CartState = {
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
    },
    removeCartProduct: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increaseCartQuantity: (state, action: PayloadAction<Cart>) => {
      const id = action.payload.id;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<Cart>) => {
      const id = action.payload.id;
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex) {
        if (state.cartItems[cartItemIndex].cartQuantity > 1) {
          state.cartItems[cartItemIndex].cartQuantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
    getTotalQuantity: (state) => {
      const totalAmount = state.cartItems.reduce(
        (amount, cartItem) => amount + cartItem.price * cartItem.cartQuantity,
        0
      );
      state.totalAmount = totalAmount;
    },
    checkOut: (state) => {
      state.cartItems = initialState.cartItems;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
