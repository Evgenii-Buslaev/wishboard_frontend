import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CardsList from "../components/CardsList/CardsList";
import Card from "../components/Card/Card";

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
    nav: true,
  },
  {
    path: "/cards",
    title: "Wishes",
    element: <CardsList />,
    nav: true,
  },
  {
    path: "/cards/:id",
    title: "Wish",
    element: <Card />,
    nav: false,
  },
  {
    path: "/login",
    title: "Sign in",
    element: <Login />,
    nav: true,
  },
  {
    path: "/register",
    title: "Sign up",
    element: <Register />,
    nav: true,
  },
];
