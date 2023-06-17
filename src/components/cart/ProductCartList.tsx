import { useSelector } from "react-redux";
import { Box, Paper, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

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
      <Paper elevation={0} sx={{ margin: "auto", marginTop: 2, maxWidth: 900 }}>
        <Typography mr={4} align="right">
          Total amount inc. VAT € 77.20
        </Typography>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 900,

          margin: "auto",
          marginTop: 2,
        }}
      >
        <Stack direction="row">
          <Button variant="outlined" sx={{ ml: 2, mb: 2, mt: 2 }}>
            Back to Shop
          </Button>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button variant="contained" sx={{ mr: 2, mb: 2, mt: 2 }}>
            Checkout
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
