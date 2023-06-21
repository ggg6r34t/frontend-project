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

export function fetchProductDetails(productId: string) {
  const productUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
  return async (dispact: AppDispatch) => {
    const response = await fetch(productUrl);
    const productDetailData = await response.json();
    console.log(productDetailData);
    dispact(productDetailsActions.getProductDetails(productDetailData));
  };
}
