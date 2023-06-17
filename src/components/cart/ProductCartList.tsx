import { useSelector } from "react-redux";
import { Container } from "@mui/material";

import { RootState } from "../../redux/store";
import ProductCartItem from "./ProductCartItem";

export default function CartProductList() {
  const CartProductList = useSelector(
    (state: RootState) => state.cart.products
  );

  return (
    <Container sx={{ mt: 20, minHeight: 950 }}>
      {CartProductList?.map((cartItem) => (
        <ProductCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </Container>
  );
}
