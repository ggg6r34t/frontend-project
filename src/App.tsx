import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import ProductList from "./components/products/ProductList";
import ProductWishList from "./components/wishList/ProductWishList";
import ProductCartList from "./components/cart/ProductCartList";
import ProductDetails from "./components/productDetail/ProductDetails";
import Footer from "./components/footer/Footer";

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
  palette: {
    primary: {
      main: "#0971f1",
      light: "#ffff",
    },
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
          <Route path="/favourites" element={<ProductWishList />} />
          <Route path="/cart" element={<ProductCartList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
