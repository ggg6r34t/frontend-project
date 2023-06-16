import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import cartReducer from "./slices/cart";
import productDetailsReducer from "./slices/productDetail";
import themeReducer from "./slices/themes";
import colorReducer from "./slices/textColor";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    productDetails: productDetailsReducer,
    color: colorReducer,
    themes: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
