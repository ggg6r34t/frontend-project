import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type ProductDetailsState = {
  productDetails: Product[];
  isLoading: boolean;
};

const initialState: ProductDetailsState = {
  productDetails: [],
  isLoading: true,
};

const searchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetails.push(action.payload);
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = searchSlice.actions;
const productDetailsReducer = searchSlice.reducer;
export default productDetailsReducer;
