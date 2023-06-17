import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type CartState = {
  products: Product[];
  cartItemCount: number;
};

const initialState: CartState = {
  products: [],
  cartItemCount: 0,
};

const searchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeFavProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increment: (state) => {
      state.cartItemCount += 1;
    },
    decrement: (state) => {
      state.cartItemCount -= 1;
    },
  },
});

export const cartActions = searchSlice.actions;
const cartReducer = searchSlice.reducer;
export default cartReducer;
