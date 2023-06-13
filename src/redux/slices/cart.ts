import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type CartState = {
  products: Product[];
};

const initialState: CartState = {
  products: [],
};

const searchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const cartActions = searchSlice.actions;
const cartReducer = searchSlice.reducer;
export default cartReducer;
