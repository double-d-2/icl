const getQuizCategories = (state) => state.quizSlice.quizCategories;
const getQuizCategoriesLoading = (state) =>
  state.quizSlice.quizCategoriesLoading;
const getQuizData = (state) => state.quizSlice.quizData;
const getQuizLoading = (state) => state.quizSlice.quizLoading;

export const quizSeletors = {
  getQuizCategories,
  getQuizCategoriesLoading,
  getQuizLoading,
  getQuizData,
};
