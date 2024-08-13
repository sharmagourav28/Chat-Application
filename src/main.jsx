import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginCom from "./Components/LoginCom.jsx";
import RegisterCom from "./Components/RegisterCom.jsx";
import HomeCom from "./Components/HomeCom.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeCom />,
  },
  {
    path: "/login",
    element: <LoginCom />,
  },
  {
    path: "/register",
    element: <RegisterCom />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
