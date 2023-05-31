import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/HomePage";
import CheckInPage from "../pages/CheckInPage";
import RegistersByDate from "../pages/RegistersByDate";

export const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: <SignUpPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/inicio",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/registrar-entrada",
    element: <CheckInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/registros/:date",
    element: <RegistersByDate />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);
