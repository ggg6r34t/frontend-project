import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import cartReducer from "./slices/cart";
import productDetailsReducer from "./slices/productDetail";
import themeReducer from "./slices/themes";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    productDetails: productDetailsReducer,
    themes: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
