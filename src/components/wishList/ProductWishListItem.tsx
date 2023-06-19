import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

import { Product } from "../../type/types";
import { RootState } from "../../redux/store";
import { productActions } from "../../redux/slices/products";
import { cartActions } from "../../redux/slices/cart";

const StyledTypography = styled(Typography)(() => ({
  maxWidth: "199px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
}));

type Prop = {
  favItem: Product;
  runAlert: () => void;
};

export default function ProductWishListItem({ favItem, runAlert }: Prop) {
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

  function addToCart(cartProd: Product) {
    functionDispatch(cartActions.addCartProduct(cartProd));
    functionDispatch(cartActions.getTotalQuantity());
  }

  return (
    <Grid item xs={2} sm={2} md={3} key={favItem.id}>
      <Card elevation={0}>
        <CardActions disableSpacing>
          <IconButton
            sx={{ position: "relative", top: 51, left: 212 }}
            aria-label="add to favorites"
            onClick={() => addToFavourite(favItem)}
          >
            <FavoriteIcon
              sx={{
                color: favProducts.some(
                  (favProd) => favProd.title === favItem.title
                )
                  ? "#000000" // black
                  : "#eeeeee", // off-white
              }}
            />
          </IconButton>
        </CardActions>
        <Link to={`/product/${favItem.id}`}>
          <CardMedia
            component="img"
            sx={{ backgroundRepeat: "no-repeat" }}
            image={favItem.images[2]}
            title={favItem.title}
          />
        </Link>
      </Card>
      <Stack direction="row" spacing={3}>
        <StyledTypography gutterBottom variant="subtitle1">
          {favItem.title}
        </StyledTypography>
        <Typography gutterBottom variant="subtitle1">
          € {favItem.price}
        </Typography>
      </Stack>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
          onClick={() => addToCart(favItem)}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Grid>
  );
}
