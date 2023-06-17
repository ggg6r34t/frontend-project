import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { v4 as uuid } from "uuid";

import { RootState } from "../../redux/store";
import ProductCartListItem from "./ProductCartListItem";

export default function CartProductList() {
  const CartProductList = useSelector(
    (state: RootState) => state.cart.products
  );

  return (
    <Container sx={{ mt: 20, minHeight: 950 }}>
      {CartProductList?.map((cartItem) => (
        <ProductCartListItem key={uuid()} cartItem={cartItem} />
      ))}
    </Container>
  );
}
