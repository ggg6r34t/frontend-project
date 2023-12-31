import { createContext, Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { themeActions } from "../../redux/slices/themeMode";

export const ThemeContext = createContext(null);

export default function ToggleThemeMode() {
  const themeMode = useSelector((state: RootState) => state.themes.mode);

  const functionDispatch = useDispatch();

  function handleToggleMode() {
    functionDispatch(themeActions.switchTheme());
  }

  return (
    <Fragment>
      <IconButton
        sx={{ position: "relative", left: 1835 }}
        onClick={() => handleToggleMode()}
        color="inherit"
      >
        {themeMode === "dark" ? (
          <Brightness7Icon sx={{ color: "white" }} />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Fragment>
  );
}
