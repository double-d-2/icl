import { createSlice } from "@reduxjs/toolkit";
import initialState from "./quizInitialState";
import { asyncGetQuizCategories, asyncGetQuiz } from "./quizOperations";

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizResult: (state, action) => {
      state.quizResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetQuizCategories.fulfilled, (state, action) => {
      state.quizCategories = action.payload.trivia_categories;
      state.quizCategoriesLoading = false;
    });
    builder.addCase(asyncGetQuizCategories.rejected, (state) => {
      state.quizCategoriesLoading = false;
    });
    builder.addCase(asyncGetQuizCategories.pending, (state) => {
      state.quizCategoriesLoading = true;
    });

    builder.addCase(asyncGetQuiz.fulfilled, (state, action) => {
      state.quizData = action.payload.results;
      state.quizLoading = false;
    });
    builder.addCase(asyncGetQuiz.rejected, (state) => {
      state.quizLoading = false;
    });
    builder.addCase(asyncGetQuiz.pending, (state) => {
      state.quizLoading = true;
    });
  },
});

export const { setQuizResult } = quizSlice.actions;

export default quizSlice;
