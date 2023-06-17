import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ButtonBase from "@mui/material/ButtonBase";
import DeleteIcon from "@mui/icons-material/Delete";

import { Product } from "../../type/types";

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
  cartItem: Product;
};

export default function ProductCartListItem({ cartItem }: Prop) {
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
          <Grid item xs container direction="column" spacing={2}>
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
              <Typography variant="subtitle2">Add to wishlist</Typography>
            </Grid>
          </Grid>
          <Grid display="flex" alignItems="center" justifyContent="center">
            <Grid item mr={12}>
              <Typography variant="subtitle1" component="div">
                € {cartItem.price}
              </Typography>
            </Grid>
            <Grid item mr={12}>
              <Typography variant="subtitle1" component="div">
                € 19.00
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <IconButton
                sx={{ cursor: "pointer", color: "black" }}
                aria-label="delete item"
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
