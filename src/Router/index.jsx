import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import ReportsPage from "../pages/reports";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/reports",
        element: <ReportsPage />,
      },
    ],
  },
]);
