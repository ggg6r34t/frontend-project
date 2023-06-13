import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import ProductList from "./components/products/ProductList";
import FavoriteProductList from "./components/products/FavouriteProductList";
import CartProductList from "./components/cart/CartProductList";
import ProductDetails from "./components/productDetail/ProductDetails";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/favourites" element={<FavoriteProductList />} />
          <Route path="/cart" element={<CartProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
