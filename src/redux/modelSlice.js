import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelState: (state, action) => {
      state.open = true;
    },
    setCrossState: (state, action) => {
      state.open = false;
    },
  },
});

export const { setModelState, setCrossState } = modelSlice.actions;

export default modelSlice.reducer;
