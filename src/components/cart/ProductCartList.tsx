import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Paper,
  Container,
  Stack,
  Snackbar,
  SnackbarOrigin,
  Alert,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import { RootState } from "../../redux/store";
import ProductCartItem from "./ProductCartItem";

type State = {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

export default function CartProductList() {
  const navigate = useNavigate();
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  setTimeout(() => {
    setState({ ...state, open: false });
  }, 5000);

  function getAnchorOrigin(
    vertical: "top" | "bottom",
    horizontal: "left" | "center" | "right"
  ) {
    return { vertical, horizontal };
  }

  function runAlert() {
    handleClick({ vertical: "top", horizontal: "center" })();
  }

  useEffect(() => {
    setTimeout(() => {
      if (cartProducts.length === 0) {
        navigate("/products");
      }
    }, 5000);
  }, [cartProducts, navigate]);

  return (
    <Container sx={{ mt: 25, minHeight: 950 }}>
      <div>
        <Snackbar
          anchorOrigin={getAnchorOrigin(vertical, "center")}
          open={open}
          key={vertical + horizontal}
        >
          <Alert severity="success">"Item added to wishlist"</Alert>
        </Snackbar>
      </div>
      <Typography mb={4} variant="h3" align="center">
        Cart
      </Typography>
      {cartProducts.length === 0 && (
        <Box component="div">
          <Typography align="center" paragraph>
            Your cart is empty.
          </Typography>
          <Typography align="center" paragraph>
            Redirecting to products page...
          </Typography>
        </Box>
      )}
      {cartProducts?.map((cartItem) => (
        <ProductCartItem
          key={cartItem.id}
          cartItem={cartItem}
          runAlert={runAlert}
        />
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
