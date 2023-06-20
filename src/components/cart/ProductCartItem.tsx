import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button, ButtonBase } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

import { RootState } from "../../redux/store";
import { cartActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/products";
import { CartProduct, Product } from "../../type/types";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const StyledTypography = styled(Typography)(() => ({
  width: "280px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
}));

type Prop = {
  cartItem: CartProduct;
  runAlert: () => void;
};

export default function ProductCartListItem({ cartItem, runAlert }: Prop) {
  const favProducts = useSelector(
    (state: RootState) => state.products.favProduct
  );

  const functionDispatch = useDispatch();

  function addToFavourite(favProd: Product) {
    const favItemInList = favProducts.some(
      (favItem) => favItem.title === favProd.title
    );

    const removeFavItemInList = favProducts.filter(
      (removeFavItem) => removeFavItem.title !== favProd.title
    );
    functionDispatch(productActions.removeFavProduct(removeFavItemInList));

    if (!favItemInList) {
      functionDispatch(productActions.addFavProduct(favProd));
      runAlert();
    }
  }

  function increaseCartQuantity(cartItem: CartProduct) {
    functionDispatch(cartActions.increaseCartQuantity(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  function decreaseCartQuantity(cartItem: CartProduct) {
    functionDispatch(cartActions.decreaseCartQuantity(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  function removeItemFromCart(cartItem: CartProduct) {
    functionDispatch(cartActions.removeCartProduct(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 900,
        flexGrow: 1,
        overflow: "hidden",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img src={cartItem.images[2]} alt={cartItem.title} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                fontWeight={"bold"}
                variant="subtitle1"
                component="div"
              >
                {cartItem.title}
              </Typography>
              <StyledTypography variant="body2" gutterBottom>
                {cartItem.description}
              </StyledTypography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                sx={{
                  color: "black",
                  margin: 0,
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => addToFavourite(cartItem)}
              >
                <Typography fontSize={11} variant="subtitle2">
                  Add to wishlist
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid display="flex" alignItems="center" justifyContent="center">
            <Grid item mr={12}>
              <Typography variant="subtitle1" component="div">
                € {cartItem.price}
              </Typography>
            </Grid>
            <Grid item mr={12}>
              <Stack>
                <IconButton onClick={() => increaseCartQuantity(cartItem)}>
                  <KeyboardArrowUpIcon fontSize="small" />
                </IconButton>

                <Typography
                  variant="subtitle1"
                  component="div"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {cartItem.cartQuantity}
                </Typography>
                <IconButton onClick={() => decreaseCartQuantity(cartItem)}>
                  <KeyboardArrowDownIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Grid>

            <Grid item mr={4}>
              <IconButton
                sx={{ cursor: "pointer", color: "black" }}
                aria-label="delete item"
                onClick={() => removeItemFromCart(cartItem)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 2 }} />
    </Paper>
  );
}
