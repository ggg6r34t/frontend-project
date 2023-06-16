import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  backgroundTextColor: string;
};

const initialState: InitialState = {
  backgroundTextColor: "white",
};

const appSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    updateTextColor: (state, action: PayloadAction<string>) => {
      state.backgroundTextColor = action.payload;
    },
    clearTextFormatting: (state) => {
      state.backgroundTextColor = "white";
    },
  },
});

export const textColorActions = appSlice.actions;
const colorReducer = appSlice.reducer;
export default colorReducer;
