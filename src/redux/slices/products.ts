import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/types";

type InitialState = {
  products: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  products: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const actions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
