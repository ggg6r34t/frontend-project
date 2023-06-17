import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { productActions } from "../../redux/slices/products";

const StyledTextField = styled(TextField)`
  // working
  & .MuiFormLabel-root {
    color: black;
  }
  & .MuiInputLabel-root {
    color: black !important;
  }

  & .MuiInput-root:before {
    border-color: black;
  }
  & .MuiInput-root:after {
    border-color: black;
  }
  & .MuiInputBase-input {
    color: black;
  }
`;

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.searchProduct(userInput));
  }

  return (
    <div style={{ marginRight: "75px" }}>
      <StyledTextField
        id="standard-basic"
        label="Search Products"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}
