import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const counterSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;
