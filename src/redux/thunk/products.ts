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

// export function fetchProductData() {
//   return async (dispatch: AppDispatch) => {
//     const baseUrl = "https://asos2.p.rapidapi.com/products/v2/list";
//     const queryParams = new URLSearchParams({
//       limit: "48",
//       categoryId: "4209",
//       offset: "0",
//       store: "US",
//       lang: "en-US",
//       sizeSchema: "US",
//       currency: "USD",
//       sort: "freshness",
//       country: "US",
//     });

//     const url = `${baseUrl}?${queryParams.toString()}`;

//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "f88a6dca86msh2c19b30f4a0e8b1p151150jsnf94ca0d872ab",
//         "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const productData = await response.json();
//       dispatch(productActions.getProductData(productData));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

// export function fetchProductDetails(productId: string) {
//   return async (dispatch: AppDispatch) => {
//     const baseProductDetailUrl =
//       "https://asos2.p.rapidapi.com/products/v3/detail?";

//     const url = `${baseProductDetailUrl}?${productId}`;
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "f88a6dca86msh2c19b30f4a0e8b1p151150jsnf94ca0d872ab",
//         "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const productDetailData = await response.json();
//       console.log(productDetailData);
//       dispatch(productDetailsActions.getProductDetails(productDetailData));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
