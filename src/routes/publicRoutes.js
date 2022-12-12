import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    elemente: <Home />,
  },
  {
    path: "/cards",
    title: "Wishes",
    elemente: null,
  },
  {
    path: "/:id",
    title: "Wish",
    elemente: null,
  },
  {
    path: "/login",
    title: "Sign in",
    elemente: <Login />,
  },
  {
    path: "/register",
    title: "Sign up",
    elemente: <Register />,
  },
];
