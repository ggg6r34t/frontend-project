import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { productActions } from "../../redux/slices/products";
import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";

type Prop = {
  productDetail: Product;
};

export default function ProductDetailsItem({ productDetail }: Prop) {
  const functionDispatch = useDispatch();

  function addToFavourite(favProd: Product) {
    functionDispatch(productActions.addFavProduct(favProd));
  }

  function addToCart(cartProd: Product) {
    functionDispatch(cartActions.cartProduct(cartProd));
  }

  return (
    <div>
      <Container sx={{ mt: 6 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} key={productDetail.id}>
            <Card elevation={0} sx={{ maxWidth: 277 }}>
              <CardActions disableSpacing>
                <IconButton
                  sx={{ position: "relative", top: 50, left: 230 }}
                  aria-label="add to favorites"
                  onClick={() => addToFavourite(productDetail)}
                >
                  <FavoriteIcon
                    sx={{
                      color: true ? "white" : "red",
                    }}
                  />
                </IconButton>
              </CardActions>
              <CardMedia
                sx={{ height: 356, backgroundRepeat: "no-repeat" }}
                image={productDetail.images[0]}
                title={productDetail.title}
              />
            </Card>
            <Stack direction="row" spacing={2}>
              <Typography gutterBottom variant="subtitle1">
                {productDetail.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {productDetail.price} EUR
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Button
          sx={{ width: 275 }}
          variant="outlined"
          onClick={() => addToCart(productDetail)}
        >
          ADD TO CART
        </Button>
      </Container>
    </div>
  );
}
