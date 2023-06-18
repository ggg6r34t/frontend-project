import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Paper, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { RootState } from "../../redux/store";
import ProductCartItem from "./ProductCartItem";

export default function CartProductList() {
  const CartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <Container sx={{ mt: 25, minHeight: 950 }}>
      <Typography mb={4} variant="h3" align="center">
        Cart
      </Typography>
      {CartProducts?.map((cartItem) => (
        <ProductCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Paper elevation={0} sx={{ margin: "auto", marginTop: 2, maxWidth: 900 }}>
        <Typography mr={4} align="right">
          Total amount inc. VAT € {totalAmount}
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
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/products"
          >
            <Button
              size="medium"
              variant="outlined"
              sx={{
                color: "black",
                width: 150,
                borderColor: "black",
                borderRadius: 0,
                ml: 2,
                mb: 2,
                mt: 2,
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "transparent",
                },
              }}
            >
              Back to Shop
            </Button>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button
            size="medium"
            variant="contained"
            sx={{
              width: 150,
              background: "black",
              borderColor: "black",
              borderRadius: 0,
              mr: 2,
              mb: 2,
              mt: 2,
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Checkout
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
