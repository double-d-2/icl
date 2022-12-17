import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz/quizSlice";
const store = configureStore({
  reducer: { quizSlice },
});

export default store;
