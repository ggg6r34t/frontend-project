import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";

import { productActions } from "../../redux/slices/products";
import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";

type Prop = {
  productDetail: Product;
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

export default function ProductDetailsItem({ productDetail, runAlert }: Prop) {
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
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={8} key={productDetail.id}>
        <Card elevation={0} sx={{ maxWidth: 575 }}>
          <CardActions disableSpacing>
            <IconButton
              sx={{ position: "relative", top: 50, left: 525 }}
              aria-label="add to favorites"
              onClick={() => addToFavourite(productDetail)}
            >
              <FavoriteIcon
                sx={{
                  color: favProducts.some(
                    (favProd) => favProd.title === productDetail.title
                  )
                    ? "black"
                    : "white",
                }}
              />
            </IconButton>
          </CardActions>
          <CardMedia
            sx={{ height: 485, backgroundRepeat: "no-repeat" }}
            image={productDetail.images[0]}
            title={productDetail.title}
          />
        </Card>
      </Grid>

      <Grid item xs={6} md={4} sx={{ mt: 15 }}>
        <Typography mb={2} fontWeight="bold" gutterBottom variant="h5">
          {productDetail.title}
        </Typography>
        <Typography mb={2} gutterBottom variant="body1">
          {productDetail.description}
        </Typography>
        <Typography mb={2} gutterBottom variant="subtitle1">
          {productDetail.price} EUR
        </Typography>
        <AddToCartButton
          sx={{ width: 358 }}
          variant="outlined"
          onClick={() => addToCart(productDetail)}
        >
          ADD TO CART
        </AddToCartButton>
      </Grid>
    </Grid>
  );
}
