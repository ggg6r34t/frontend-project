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
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex >= 0) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
      } else {
        const cartProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(cartProduct);
      }
    },
    removeCarProduct: (state, action: PayloadAction<number>) => {
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
      const { total, quantity } = state.cartItems.reduce(
        (cartTotalQuantity, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotalQuantity.total += itemTotal;
          cartTotalQuantity.quantity += cartQuantity;

          return cartTotalQuantity;
        },
        { total: 0, quantity: 0 }
      );
      state.totalAmount = total;
      state.totalQuantity = quantity;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
