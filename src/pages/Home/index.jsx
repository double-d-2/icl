import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppLoader from "../../components/AppLoader";
import AppSelect from "../../components/AppSelect";
import AppTyphography from "../../components/AppTypography";
import usePrevious from "../../hooks/usePrevious";
import { asyncGetQuizCategories, quizSeletors } from "../../redux/quiz";

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
    return <AppLoader open={true} />;
  }
  const noData = prevLoading && !categoreisLoading && !quizCategories.length;
  return noData ? (
    "No Categoreis Data Try Again Later"
  ) : (
    <AppBox
      className="app_page app_home_page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={[12, 20, 33]}
    >
      <AppTyphography
        className="page_title"
        variant="h2"
        color="primary"
        mb={5}
      >
        Trivia App
      </AppTyphography>
      <AppTyphography variant="h6" mb={15}>
        Pick a Category
      </AppTyphography>
      <AppBox width={320} mb={[10, 15, 25]}>
        <AppSelect
          selectList={quizCategories}
          handleChange={handleCategorySelect}
          value={category}
          placeholder="Category"
        />
      </AppBox>
      <AppButton
        component={Link}
        to={`/quiz/?category=${category}`}
        disabled={!category}
        variant="contained"
        sx={{ width: 150 }}
      >
        Start
      </AppButton>
    </AppBox>
  );
};

export default Home;
