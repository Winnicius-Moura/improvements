import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { PixPage } from "./pages/pix";
import { LoadingBarLinearComponent } from "./components/loadingBar";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: '/pix',
    element: <PixPage />
  }
]);