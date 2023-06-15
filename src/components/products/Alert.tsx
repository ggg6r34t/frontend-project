import { useState } from "react";
import { SnackbarOrigin } from "@mui/material/Snackbar";

type State = {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

export function Alert() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  setTimeout(() => {
    setState({ ...state, open: false });
  }, 3000);

  return {
    open,
    vertical,
    horizontal,
    handleClick,
  };
}
