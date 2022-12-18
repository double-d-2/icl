import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppSelect from "../../components/AppSelect";
import AppTyphography from "../../components/AppTypography";
import usePrevious from "../../hooks/usePrevious";
import { asyncGetQuizCategories, quizSeletors } from "../../redux/quiz";
import { MainBlock } from "./homeStyles";

const { getQuizCategories, getQuizCategoriesLoading } = quizSeletors;
const Home = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const quizCategories = useSelector(getQuizCategories);
  const categoreisLoading = useSelector(getQuizCategoriesLoading);
  const prevLoading = usePrevious(categoreisLoading);
  useEffect(() => {
    dispatch(asyncGetQuizCategories());
  }, [dispatch]);
  const handleCategorySelect = (e) => {
    setCategory(e.target.value);
  };
  if (categoreisLoading) {
    return "loading";
  }
  const noData = prevLoading && !categoreisLoading && !quizCategories.length;
  return noData ? (
    "No Categoreis Data Try Again Later"
  ) : (
    <AppBox className="app_page app_home_page" component={MainBlock}>
      <AppTyphography className="page_title" variant="h3">
        Trivia App
      </AppTyphography>
      <AppTyphography>Pick a Category</AppTyphography>
      <AppBox width={320}>
        <AppSelect
          selectList={quizCategories}
          handleChange={handleCategorySelect}
          value={category}
        />
      </AppBox>
      <AppButton
        component={Link}
        to={`/quiz/?category=${category}`}
        disabled={!category}
        variant="contained"
      >
        Start
      </AppButton>
    </AppBox>
  );
};

export default Home;
