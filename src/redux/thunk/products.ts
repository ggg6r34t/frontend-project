import { productDetailsActions } from "../slices/productDetail";
import { productActions } from "../slices/products";
import { AppDispatch } from "../store";

const productUrl = "https://api.escuelajs.co/api/v1/products";

export function fetchProductData() {
  return async (dispact: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispact(productActions.getProductData(productData));
  };
}

export function fetchProductDetails(url: string) {
  return async (dispact: AppDispatch) => {
    const response = await fetch(url);
    const productDetailData = await response.json();
    console.log(productDetailData);
    dispact(productDetailsActions.getProductDetails(productDetailData));
  };
}
