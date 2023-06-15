import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/types";

type InitialState = {
  products: Product[];
  favProduct: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  products: [],
  favProduct: [],
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
    searchProduct(state, action: PayloadAction<string>) {
      const product = state.products.filter((product) =>
        product.title
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
      state.products = product;
    },
    addFavProduct(state, action: PayloadAction<Product>) {
      state.favProduct.push(action.payload);
    },
    removeFavProduct(state, action: PayloadAction<Product[]>) {
      state.favProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
