import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "./assets/styles/GlobalStyle";
import { router } from "./routes";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <GlobalStyle />
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
