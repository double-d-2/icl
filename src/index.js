import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AppLoader from "./components/AppLoader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<AppLoader />}>
        <RouterProvider router={AppRouter} />
      </Suspense>
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
