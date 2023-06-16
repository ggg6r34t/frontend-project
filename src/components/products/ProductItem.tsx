import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { productActions } from "../../redux/slices/products";
import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";

type Prop = {
  product: Product;
  runAlert: () => void;
};

const AddToCartButton = styled(Button)`
  border-color: #3d3c42 !important;
  color: #3d3c42 !important;
  &&:hover {
    color: #c92c6d;
    background-color: transparent;
  }
`;

export default function ProductItem({ product, runAlert }: Prop) {
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
    functionDispatch(cartActions.cartProduct(cartProd));
  }

  return (
    <Paper elevation={0}>
      <Card elevation={0} sx={{ maxWidth: 277 }}>
        <CardActions disableSpacing>
          <IconButton
            sx={{ position: "relative", top: 55, left: 225 }}
            aria-label="add to favorites"
            onClick={() => addToFavourite(product)}
          >
            <FavoriteIcon
              sx={{
                color: favProducts.some(
                  (favProd) => favProd.title === product.title
                )
                  ? "red"
                  : "white",
              }}
            />
          </IconButton>
        </CardActions>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            sx={{ height: 356, backgroundRepeat: "no-repeat" }}
            image={product.images[2]}
            title={product.title}
          />
        </Link>
      </Card>
      <Stack direction="row" spacing={3}>
        <Typography gutterBottom variant="subtitle1">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {product.price} EUR
        </Typography>
      </Stack>

      <AddToCartButton
        sx={{ width: 275 }}
        variant="outlined"
        onClick={() => addToCart(product)}
      >
        ADD TO CART
      </AddToCartButton>
    </Paper>
  );
}
