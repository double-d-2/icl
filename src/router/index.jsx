import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Quiz = lazy(() => import("../pages/Quiz"));
const QuizResult = lazy(() => import("../pages/QuizResult"));

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
    path: "/*",
    element: "NOT FOUND",
  },
]);
