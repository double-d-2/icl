import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosService from "../../services/axiosService";

export const asyncGetQuizCategories = createAsyncThunk(
  "asyncGetQuizCategories",
  async () => {
    try {
      const { data } = await axiosService.get({
        endpoint: "api_category.php",
      });

      return data;
    } catch (e) {
      return;
    }
  }
);
export const asyncGetQuiz = createAsyncThunk(
  "asyncGetQuiz",
  async ({ params = {} }) => {
    try {
      const { data } = await axiosService.get({
        endpoint: "api.php",
        params,
      });

      return data;
    } catch (e) {
      return;
    }
  }
);
