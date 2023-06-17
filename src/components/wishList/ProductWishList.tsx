import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Snackbar,
  SnackbarOrigin,
  Alert,
  Container,
  Typography,
} from "@mui/material";

import { RootState } from "../../redux/store";
import ProductWishListItem from "./ProductWishListItem";

type State = {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

export default function FavoriteProductList() {
  const favProductList = useSelector(
    (state: RootState) => state.products.favProduct
  );
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
        Favorite Products
      </Typography>
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
