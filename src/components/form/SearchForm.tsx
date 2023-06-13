import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/products";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.searchProduct(userInput));
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search Products"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}
