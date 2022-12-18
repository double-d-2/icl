const getQuizCategories = (state) => state.quizSlice.quizCategories;
const getQuizCategoriesLoading = (state) =>
  state.quizSlice.quizCategoriesLoading;
const getQuizData = (state) => state.quizSlice.quizData;
const getQuizLoading = (state) => state.quizSlice.quizLoading;
const getQuizResult = (state) => {
  return state.quizSlice.quizResult;
};

export const quizSeletors = {
  getQuizCategories,
  getQuizCategoriesLoading,
  getQuizLoading,
  getQuizData,
  getQuizResult,
};
