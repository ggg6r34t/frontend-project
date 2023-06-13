import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
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
import { Link } from "react-router-dom";

type Prop = {
  product: Product;
};

export default function ProductItem({ product }: Prop) {
  const functionDispatch = useDispatch();

  function addToFavourite(favProd: Product) {
    functionDispatch(productActions.addFavProduct(favProd));
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
                color: true ? "white" : "red",
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
      <Stack direction="row" spacing={4}>
        <Typography gutterBottom variant="subtitle1">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {product.price} EUR
        </Typography>
      </Stack>

      <Button
        sx={{ width: 275 }}
        variant="outlined"
        onClick={() => addToCart(product)}
      >
        ADD TO CART
      </Button>
    </Paper>
  );
}
