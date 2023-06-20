import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container, Grid, Pagination, Alert } from "@mui/material";
import { Snackbar, SnackbarOrigin } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

type State = {
  open: boolean;
  vertical: string;
  horizontal: string;
};

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [page, setPage] = useState(1);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "",
    horizontal: "",
  });
  const { vertical, horizontal, open } = state;

  const itemsPerPage = 9;

  const changePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  setTimeout(() => {
    setState({ ...state, open: false });
  }, 5000);

  function getAnchorOrigin(vertical: "top", horizontal: "center") {
    return { vertical, horizontal };
  }

  function runAlert() {
    handleClick({ vertical: "top", horizontal: "center" })();
  }

  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());
  }, [fetchDispatch]);

  if (isLoading) {
    return (
      <Container sx={{ mt: 15, minHeight: 950 }}>
        <Box
          sx={{
            position: "relative",
            top: "250px",
            left: "400px",
            display: "inline-flex",
          }}
        >
          <CircularProgress sx={{ color: "black" }} size={300} />
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 25 }}>
      <div>
        <Snackbar
          anchorOrigin={getAnchorOrigin("top", "center")}
          open={open}
          key={vertical + horizontal}
        >
          <Alert severity="success">"Item added to wishlist"</Alert>
        </Snackbar>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products
          .slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
          .map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <ProductItem
                key={product.id}
                product={product}
                runAlert={runAlert}
              />
            </Grid>
          ))}
      </Grid>
      <Box mt={8} sx={{ position: "relative", right: 45 }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          showFirstButton
          showLastButton
          count={Math.ceil(products.length / itemsPerPage)}
          onChange={changePage}
        />
      </Box>
    </Container>
  );
}
