import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

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
    element: "adasd",
  },
  {
    path: "/*",
    element: "NOT FOUND",
  },
]);
