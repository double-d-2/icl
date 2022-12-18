import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppBox from "../../components/AppBox";
import AppButton from "../../components/AppButton";
import AppDecorLabel from "../../components/AppDecorLabel";
import AppTyphography from "../../components/AppTypography";
import { AMOUNT_OF_QUIZ_QUESTIONS } from "../../constants";
import { arrayShuffle } from "../../helpers/arrayHelpers";
import usePrevious from "../../hooks/usePrevious";
import { asyncGetQuiz, quizSeletors } from "../../redux/quiz";
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

  const shuffledanswers = useMemo(() => {
    return arrayShuffle(answers);
  }, [answers]);

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
      navigate("/quiz/result");
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

  const noData = prevLoading && quizDataLoading && !quizData.length;
  if (quizDataLoading) {
    return "Loading";
  }
  return !noData ? (
    <AppBox>
      <AppTyphography
        dangerouslySetInnerHTML={{
          __html: currentData?.question,
        }}
      />
      <AppDecorLabel>{currentData?.difficulty}</AppDecorLabel>
      <AppBox className="answers_section" display="flex">
        {shuffledanswers.map((item) => {
          return (
            <AppButton
              variant="outlined"
              key={item}
              onClick={() => handleAnswerClick(item)}
            >
              {item}
            </AppButton>
          );
        })}
      </AppBox>
    </AppBox>
  ) : (
    "Must Be Some no data view"
  );
};

export default Quiz;
