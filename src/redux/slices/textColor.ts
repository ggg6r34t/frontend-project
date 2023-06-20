import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  backgroundTextColor: string;
};

const initialState: InitialState = {
  backgroundTextColor: "white" || localStorage.getItem("backgroundTextColor"),
};

const textColorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    updateTextColor: (state, action: PayloadAction<string>) => {
      state.backgroundTextColor = action.payload;
      localStorage.setItem("backgroundTextColor", action.payload);
    },
    clearTextFormatting: (state) => {
      state.backgroundTextColor = "white";
      localStorage.removeItem("backgroundTextColor");
    },
  },
});

export const textColorActions = textColorSlice.actions;
const textColorReducer = textColorSlice.reducer;
export default textColorReducer;
