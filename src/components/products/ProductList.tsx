import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  CircularProgress,
  Grid,
  Pagination,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  SnackbarOrigin,
} from "@mui/material";
import styled from "styled-components";

import { AppDispatch, RootState } from "../../redux/store";
import {
  productActions,
  selectSortedProducts,
} from "../../redux/slices/products";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import { SortOrder } from "../../type/types";

const StyledFormControl = styled(FormControl)`
  // working
  &.muiformcontrol-root: focused {
    color: black;
    border-color: black !important;
  }
  & .MuiInputLabel-root:after {
    color: black !important;
  }
`;

type State = {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

export default function ProductList() {
  const sortedProducts = useSelector(selectSortedProducts);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [page, setPage] = useState(1);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [sortOption, setSortOption] = useState<
    "" | "name" | "price" | "az" | "za" | undefined
  >(undefined);

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

  function getAnchorOrigin(
    vertical: "top" | "bottom",
    horizontal: "left" | "center" | "right"
  ) {
    return { vertical, horizontal };
  }

  function runAlert() {
    handleClick({ vertical: "top", horizontal: "center" })();
  }

  const functionDispatch = useDispatch();
  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());
  }, [fetchDispatch]);

  // Handles change of sorting option
  const handleSortChange = (event: SelectChangeEvent) => {
    const option = event.target.value as
      | ""
      | "name"
      | "price"
      | "az"
      | "za"
      | undefined;
    let sortOrder: SortOrder;

    if (option === sortOption) {
      sortOrder = "asc"; // Assuming "asc" is the default sort order
    } else {
      setSortOption(option);

      if (option === "name") {
        sortOrder = "asc";
      } else if (option === "price") {
        sortOrder = "desc";
      } else {
        sortOrder = "asc"; // Set a default value for sortOrder if none of the conditions match
      }
    }

    functionDispatch(productActions.setSortOrder(sortOrder));
  };

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
          <CircularProgress size={300} />
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 25 }}>
      <div>
        <Snackbar
          anchorOrigin={getAnchorOrigin(vertical, "center")}
          open={open}
          key={vertical + horizontal}
        >
          <Alert severity="success">"Item added to wishlist"</Alert>
        </Snackbar>
      </div>
      <Box component="div" sx={{ mb: 2 }}>
        <StyledFormControl sx={{ width: 150 }}>
          <InputLabel id="sort-select-label">Sort Products</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortOption}
            onChange={handleSortChange}
            sx={{ color: "black" }}
          >
            <MenuItem value="">...</MenuItem>
            <MenuItem value="name">Sort by Name</MenuItem>
            <MenuItem value="price">Sort by Price</MenuItem>
            <MenuItem value="az">A-Z</MenuItem>
            <MenuItem value="za">Z-A</MenuItem>
          </Select>
        </StyledFormControl>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sortedProducts
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
          count={Math.ceil(sortedProducts.length / itemsPerPage)}
          onChange={changePage}
        />
      </Box>
    </Container>
  );
}
