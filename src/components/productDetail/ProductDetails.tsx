import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetails } from "../../redux/thunk/products";
import ProductDetailsItem from "./ProductDetailsItem";

export default function ProductDetails() {
  const param = useParams();
  const productDetails = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetails.isLoading
  );

  const fetchDispatch = useDispatch<AppDispatch>();

  const productUrl = `https://api.escuelajs.co/api/v1/products/${param.id}`;

  useEffect(() => {
    fetchDispatch(fetchProductDetails(productUrl));
  }, [fetchDispatch, productUrl]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(productDetails);

  return (
    <div>
      {productDetails.map((product) => (
        <ProductDetailsItem key={uuid()} productDetail={product} />
      ))}
    </div>
  );
}
