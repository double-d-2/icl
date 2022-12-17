import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { asyncGetQuiz } from "../../redux/quiz";

const Quiz = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const quizCategory = searchParams.get("category");
  useEffect(() => {
    dispatch(
      asyncGetQuiz({
        params: {
          category: quizCategory,
          amount: 10,
        },
      })
    );
  }, [dispatch, quizCategory]);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "Which alternative rock band released the critically-acclaimed album &quot;OK Computer&quot;?",
      }}
    />
  );
};

export default Quiz;
