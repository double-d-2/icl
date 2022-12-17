import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import quizSlice from "./quiz";
const store = configureStore({
  reducer: combineReducers({ quizSlice: quizSlice.reducer }),
});

export default store;
