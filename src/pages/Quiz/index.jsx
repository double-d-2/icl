import { useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppDecorLabel from "../../components/AppDecorLabel";
import AppLoader from "../../components/AppLoader";
import AppTyphography from "../../components/AppTypography";
import { AMOUNT_OF_QUIZ_QUESTIONS } from "../../constants";
import usePrevious from "../../hooks/usePrevious";
import { asyncGetQuiz, quizSeletors, setQuizResult } from "../../redux/quiz";
const { getQuizData, getQuizLoading } = quizSeletors;

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [quizStep, setQuizStep] = useState(0);
  const quizData = useSelector(getQuizData);
  const quizDataLoading = useSelector(getQuizLoading);
  const prevLoading = usePrevious(quizDataLoading);
  const quizQollectedData = useRef({
    data: [],
    correctAnswersCount: 0,
    startedAt: Date.now(),
    endedAt: null,
  });
  const theme = useTheme();

  const quizCategory = searchParams.get("category");

  useEffect(() => {
    quizCategory &&
      dispatch(
        asyncGetQuiz({
          params: {
            category: quizCategory,
            amount: AMOUNT_OF_QUIZ_QUESTIONS,
          },
        })
      );
  }, [dispatch, quizCategory]);

  const currentData = quizData[quizStep];

  const answers = currentData
    ? [currentData.correct_answer, ...currentData.incorrect_answers]
    : [];
  const handleAnswerClick = (answer) => {
    const { correct_answer, question } = currentData;
    quizQollectedData.current.data.push({
      question: question,
      answer,
      correctAnswer: correct_answer,
    });

    if (correct_answer === answer) {
      quizQollectedData.current.correctAnswersCount++;
    }
    if (quizStep === quizData.length - 1) {
      quizQollectedData.current.endedAt = Date.now();
      handleScoreSaving();
      dispatch(
        setQuizResult({
          totalQuestionsCount: quizData.length,
          correctAnswersCount: quizQollectedData.current.correctAnswersCount,
        })
      );
      navigate("/quiz-result");
    } else {
      setQuizStep(quizStep + 1);
    }
  };
  const handleScoreSaving = () => {
    const quizScore = localStorage.getItem("quizScore");
    if (quizScore) {
      const parsedScore = JSON.parse(quizScore);
      if (Array.isArray(parsedScore)) {
        parsedScore.push(quizQollectedData.current);
        localStorage.setItem("quizScore", JSON.stringify(parsedScore));
      } else {
        localStorage.removeItem("quizScore");
        localStorage.setItem(
          "quizScore",
          JSON.stringify([quizQollectedData.current])
        );
      }
    } else {
      localStorage.setItem(
        "quizScore",
        JSON.stringify([quizQollectedData.current])
      );
    }
  };
  const getQuestionIndex = () => {
    const step = quizStep + 1;
    return step < 10 ? "0" + step : step;
  };
  const noData =
    (prevLoading && !quizDataLoading && !quizData.length) || !quizCategory;
  if (quizDataLoading) {
    return <AppLoader />;
  }
  return !noData ? (
    <AppBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={[9, 18, 36]}
    >
      <AppTyphography
        className="page_title"
        variant="h2"
        mb={5}
        color="primary"
      >
        Question {getQuestionIndex()}
      </AppTyphography>
      <AppDecorLabel
        backgroundColor={theme.palette.label[currentData?.difficulty]}
        mb={22}
      >
        {currentData?.difficulty}
      </AppDecorLabel>
      <AppTyphography
        variant="h6"
        align="center"
        dangerouslySetInnerHTML={{
          __html: currentData?.question,
        }}
        mb={18}
      />
      <AppBox
        className="answers_section"
        display="flex"
        justifyContent="center"
        gap={6}
        flexWrap="wrap"
      >
        {answers.map((item) => {
          return (
            <AppButton
              variant="outlined"
              key={item}
              onClick={() => handleAnswerClick(item)}
            >
              <AppBox
                minWidth={[180, 240, 290]}
                component="span"
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            </AppButton>
          );
        })}
      </AppBox>
    </AppBox>
  ) : (
    <AppBox align="center">
      <AppTyphography
        className="page_title"
        variant="h6"
        mb={5}
        color="primary"
      >
        No Data Try Again Later
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

export default Quiz;
