import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

import { RootState } from "../../redux/store";
import ProductCartItem from "./ProductCartItem";

export default function CartProductList() {
  const CartProductList = useSelector(
    (state: RootState) => state.cart.products
  );

  return (
    <Container sx={{ mt: 25, minHeight: 950 }}>
      <Typography mb={4} variant="h3" align="center">
        Cart
      </Typography>
      {CartProductList?.map((cartItem) => (
        <ProductCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </Container>
  );
}
