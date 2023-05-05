import React, { useContext } from "react";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const queryClient = new QueryClient();
  const {currentUser}=useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
  ]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  );
};
export default App;
