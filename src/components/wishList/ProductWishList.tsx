import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  Snackbar,
  SnackbarOrigin,
  Alert,
  Container,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { RootState } from "../../redux/store";
import ProductWishListItem from "./ProductWishListItem";

type State = {
  open: boolean;
  vertical: string;
  horizontal: string;
};

export default function ProductWishList() {
  const favProductList = useSelector(
    (state: RootState) => state.products.favProduct
  );
  const [state, setState] = useState<State>({
    open: false,
    vertical: "",
    horizontal: "",
  });
  const { vertical, horizontal, open } = state;

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
      <Typography mb={4} variant="h3" align="center">
        Wishlist
      </Typography>
      {favProductList.length === 0 && (
        <Box component="div">
          <Typography align="center" paragraph>
            You have no products in your wishlist yet.
          </Typography>
          <Typography align="center" paragraph>
            Click on the heart next to your wishlist product.
          </Typography>
          <Typography align="center" paragraph>
            <FavoriteBorderIcon />
          </Typography>
        </Box>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {favProductList?.map((favItem) => (
          <ProductWishListItem
            key={favItem.id}
            favItem={favItem}
            runAlert={runAlert}
          />
        ))}
      </Grid>
    </Container>
  );
}
