import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SIgnUpPage";

export const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: <SignUpPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);
