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
    <AppBox>
      <AppTyphography className="page_title" variant="h3">
        Trivia App
      </AppTyphography>
      <AppTyphography>
        Your Score is:{" "}
        {`${quizResult.correctAnswersCount}/${quizResult.totalQuestionsCount}`}
      </AppTyphography>
      <AppButton component={Link} to={`/`} variant="contained">
        Home
      </AppButton>
    </AppBox>
  );
};

export default QuizResult;
