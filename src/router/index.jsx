import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import QuizResult from "../pages/QuizResult";
import QuizScore from "../pages/QuizScore";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/quiz-result",
    element: <QuizResult />,
  },
  {
    path: "/quiz-score",
    element: <QuizScore />,
  },
  {
    path: "/*",
    element: "NOT FOUND",
  },
]);
