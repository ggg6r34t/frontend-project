import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

import SearchForm from "../form/SearchForm";
import { textColorActions } from "../../redux/slices/textColor";
import { RootState } from "../../redux/store";

const StyledTextField = styled(TextField)`
  // working
  & .MuiFormLabel-root {
    color: white;
  }
  & .MuiInputLabel-root {
    color: white !important;
  }

  // & .MuiInput-root:hover:not:before {
  //   color: white;
  // }

  & .MuiInput-root:before {
    border-color: white;
  }
  & .MuiInput-root:after {
    border-color: white;
  }
  & .MuiInputBase-input {
    color: white;
  }
`;

const IconButtonStyled = styled(IconButton)`
  margin-right: 16px;
  color: #00000;
  &:hover {
    color: #da0037;
    background-color: transparent;
  }
`;

const SocialIconsContainer = styled(Grid)`
  margin-top: 365px;
  margin-bottom: 16px;
`;

const StyledWhiteFavouriteBadge = styled(Badge)`
  & .MuiBadge-badge {
    position: absolute;
    right: 17.5px;
    top: 16px;
    background: transparent;
    color: white;
    margin: 0;
  }
`;

const StyledCartBadge = styled(Badge)`
  & .MuiBadge-badge {
    position: absolute;
    top: 29px;
    padding: "0 4px";
    background: black;
    color: white;
    margin: 0;
  }
`;

export default function NavBar() {
  const dispatch = useDispatch();
  const favProducts = useSelector(
    (state: RootState) => state.products.favProduct
  );
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const textColor = useSelector(
    (state: RootState) => state.color.backgroundTextColor
  );
  const [state, setState] = useState({
    left: false,
  });

  let favoriteCount: number;
  if (favProducts.length === 0) {
    favoriteCount = 0;
  } else {
    favoriteCount = favProducts.length;
  }

  let cartItemCount: number;
  if (cartProducts.length === 0) {
    cartItemCount = 0;
  } else {
    cartItemCount = cartProducts.length;
  }

  const handleColorChange = () => {
    dispatch(textColorActions.updateTextColor("black"));
  };

  const handleDefaultColor = () => {
    dispatch(textColorActions.clearTextFormatting());
  };

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, left: open });
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        color="transparent"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              mr: 2,
              color: textColor,
              minHeight: 150,
            }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{ width: 347 }}
              component="div"
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <List>
                <Box
                  sx={{
                    mt: 2,
                    mb: 22,
                  }}
                >
                  <ListItem
                    disablePadding
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                      to="/"
                      onClick={handleDefaultColor}
                    >
                      <Typography variant="h1">WEMA</Typography>
                    </Link>
                  </ListItem>
                </Box>

                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack spacing={2}>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/"
                        onClick={handleDefaultColor}
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Home</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        to="/products"
                        onClick={handleColorChange}
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Products</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/wishlist"
                        onClick={handleColorChange}
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Wishlist</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/about"
                        onClick={handleColorChange}
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>About</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/cart"
                        onClick={handleColorChange}
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Cart</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                  </Stack>
                </Box>
              </List>

              <SocialIconsContainer
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <IconButtonStyled
                      sx={{ color: "black" }}
                      rel="noopener"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://twitter.com/" target="_blank">
                    <IconButtonStyled
                      sx={{ color: "black" }}
                      rel="noopener"
                      aria-label="Twitter"
                    >
                      <TwitterIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://instagram.com/" target="_blank">
                    <IconButtonStyled
                      sx={{ color: "black" }}
                      rel="noopener"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://youtube.com/" target="_blank">
                    <IconButtonStyled
                      sx={{ color: "black" }}
                      rel="noopener"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
              </SocialIconsContainer>
            </Box>
          </Drawer>

          <Link
            style={{ textDecoration: "none", color: "/" ? "white" : "black" }}
            to="/"
            onClick={handleDefaultColor}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                flexGrow: 1,
                color: textColor,
              }}
            >
              WEMA
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {textColor === "white" ? (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/products"
              onClick={handleColorChange}
            >
              <div style={{ marginRight: "75px" }}>
                <StyledTextField
                  id="standard-basic"
                  label="Search Products"
                  variant="standard"
                />
              </div>
            </Link>
          ) : (
            <SearchForm />
          )}

          <Link
            style={{ textDecoration: "none", color: textColor }}
            to="/wishlist"
            onClick={handleColorChange}
          >
            <IconButton color="inherit" aria-label="wishlist">
              {textColor === "white" ? (
                <FavoriteOutlinedIcon fontSize="large" />
              ) : (
                <StyledWhiteFavouriteBadge badgeContent={favoriteCount}>
                  <FavoriteOutlinedIcon fontSize="large" />
                </StyledWhiteFavouriteBadge>
              )}
            </IconButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: textColor }}
            to="/cart"
            onClick={handleColorChange}
          >
            <IconButton color="inherit" aria-label="cart">
              {textColor === "white" ? (
                <ShoppingBagOutlinedIcon fontSize="large" />
              ) : (
                <StyledCartBadge color="secondary" badgeContent={cartItemCount}>
                  <ShoppingBagOutlinedIcon fontSize="large" />
                </StyledCartBadge>
              )}
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
