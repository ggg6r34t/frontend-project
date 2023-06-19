import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  mode: "light" | "dark";
};

const initialState: InitialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
