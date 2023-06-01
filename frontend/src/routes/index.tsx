import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/HomePage";
import CheckInPage from "../pages/CheckInPage";
import RegistersByDatePage from "../pages/RegistersByDatePage";
import CheckOutPage from "../pages/CheckOutPage";
import CashRegisterPage from "../pages/CashRegisterPage";
import RegistersHistoryPage from "../pages/RegistersHistoryPage";

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
    element: <RegistersByDatePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/registros-historico",
    element: <RegistersHistoryPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/registrar-saida/:id",
    element: <CheckOutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/caixa/:type",
    element: <CashRegisterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);
