import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, SnackbarOrigin, Alert, Container } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetails } from "../../redux/thunk/products";
import ProductDetailsItem from "./ProductDetailsItem";

type State = {
  open: boolean;
  vertical: string;
  horizontal: string;
};

export default function ProductDetails() {
  const param = useParams();
  const productDetails = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetails.isLoading
  );

  const [state, setState] = useState<State>({
    open: false,
    vertical: "",
    horizontal: "",
  });
  const { vertical, horizontal, open } = state;

  const fetchDispatch = useDispatch<AppDispatch>();

  const productUrl = `https://api.escuelajs.co/api/v1/products/${param.id}`;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  setTimeout(() => {
    setState({ ...state, open: false });
  }, 5000);

  function getAnchorOrigin(vertical: "top", horizontal: "center") {
    return { vertical, horizontal };
  }

  function runAlert() {
    handleClick({ vertical: "top", horizontal: "center" })();
  }

  useEffect(() => {
    fetchDispatch(fetchProductDetails(productUrl));
  }, [fetchDispatch, productUrl]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ mt: 25, minHeight: 950 }}>
      <div>
        <Snackbar
          anchorOrigin={getAnchorOrigin("top", "center")}
          open={open}
          key={vertical + horizontal}
        >
          <Alert severity="success">"Item added to wishlist"</Alert>
        </Snackbar>
      </div>
      {productDetails.map((product) => (
        <ProductDetailsItem
          key={product.id}
          productDetail={product}
          runAlert={runAlert}
        />
      ))}
    </Container>
  );
}
