import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type ProductDetailsState = {
  productDetails: null | Product;
  isLoading: boolean;
};

const initialState: ProductDetailsState = {
  productDetails: null,
  isLoading: true,
};

const searchSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = searchSlice.actions;
const productDetailsReducer = searchSlice.reducer;
export default productDetailsReducer;
