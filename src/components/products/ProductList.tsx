import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import {
  Box,
  Container,
  Grid,
  Typography,
  Pagination,
  Alert,
} from "@mui/material";
import { Snackbar, SnackbarOrigin } from "@mui/material";
import { v4 as uuid } from "uuid";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "relative",
        top: "300px",
        display: "inline-flex",
      }}
    >
      <CircularProgress size={300} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

type State = {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(10);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
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
  }, 10000);

  function getAnchorOrigin(
    vertical: "top" | "bottom",
    horizontal: "left" | "center" | "right"
  ) {
    return { vertical, horizontal };
  }

  function runAlert() {
    handleClick({ vertical: "top", horizontal: "center" })();
  }

  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [fetchDispatch]);

  if (isLoading) {
    return <CircularProgressWithLabel value={progress} />;
  }

  return (
    <Container sx={{ mt: 6 }}>
      <div>
        <Snackbar
          anchorOrigin={getAnchorOrigin(vertical, "center")}
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
            <Grid item xs={2} sm={4} md={4} key={uuid()}>
              <ProductItem key={uuid()} product={product} runAlert={runAlert} />
            </Grid>
          ))}
      </Grid>
      <Box mt={8} sx={{ position: "relative", right: 45 }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          showFirstButton
          showLastButton
          count={Math.ceil(products.length / itemsPerPage)}
          size="small"
          onChange={changePage}
        />
      </Box>
    </Container>
  );
}
