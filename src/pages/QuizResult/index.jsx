import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppTyphography from "../../components/AppTypography";
import { quizSeletors } from "../../redux/quiz";
const { getQuizResult } = quizSeletors;
const QuizResult = () => {
  const quizResult = useSelector(getQuizResult);
  const navigate = useNavigate();
  useEffect(() => {
    if (!quizResult.correctAnswersCount && !quizResult.totalQuestionsCount) {
      navigate("/");
    }
  }, [navigate, quizResult]);
  return (
    <AppBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={[12, 20, 33]}
    >
      <AppTyphography
        className="page_title"
        variant="h2"
        color="primary"
        mb={[9, 18, 36]}
      >
        Thank You
      </AppTyphography>
      <AppTyphography variant="h6" mb={15}>
        Your Score is:{" "}
        {`${quizResult.correctAnswersCount}/${quizResult.totalQuestionsCount}`}
      </AppTyphography>
      <AppButton
        component={Link}
        to={`/`}
        variant="contained"
        sx={{ width: 150 }}
      >
        Home
      </AppButton>
    </AppBox>
  );
};

export default QuizResult;
