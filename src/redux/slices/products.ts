import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Product, SortOrder } from "../../type/types";

type InitialState = {
  products: Product[];
  favProduct: Product[];
  isLoading: boolean;
  sortOrder: SortOrder;
};

const initialState: InitialState = {
  products: [],
  favProduct: [],
  isLoading: true,
  sortOrder: "asc",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
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

export const selectSortedProducts = (state: RootState): Product[] => {
  const { products, sortOrder } = state.products;
  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // If the names are the same, compare by price
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return sortedProducts;
};

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
