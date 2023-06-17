import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import { Grid, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

import { Product } from "../../type/types";
import { productActions } from "../../redux/slices/products";
import { cartActions } from "../../redux/slices/cart";

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
                  ? "red"
                  : "white",
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
        <Typography gutterBottom variant="subtitle1">
          {favItem.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {favItem.price} EUR
        </Typography>
      </Stack>

      <IconButton
        sx={{ "&:hover": { backgroundColor: "transparent" }, width: 275 }}
        onClick={() => addToCart(favItem)}
      >
        <AddIcon />
      </IconButton>
    </Grid>
  );
}
