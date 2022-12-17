import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppSelect from "../../components/AppSelect";
import AppTyphography from "../../components/AppTypography";
import { asyncGetQuizCategories, quizSeletors } from "../../redux/quiz";
import { MainBlock } from "./homeStyles";

const { getQuizCategories } = quizSeletors;
const Home = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const quizCategories = useSelector(getQuizCategories);
  useEffect(() => {
    dispatch(asyncGetQuizCategories());
  }, [dispatch]);
  const handleCategorySelect = (e) => {
    setCategory(e.target.value);
  };
  return (
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
        state={{ any: "any" }}
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
