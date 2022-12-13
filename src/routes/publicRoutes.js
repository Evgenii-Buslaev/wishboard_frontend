import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CardsList from "../components/CardsList/CardsList";
import Card from "../components/Card/Card";

export const publicRoutes = [
  {
    path: "/",
    title: "О проекте",
    element: <Home />,
    nav: true,
  },
  {
    path: "/cards",
    title: "Пожелания",
    element: <CardsList />,
    nav: true,
  },
  {
    path: "/cards/:id",
    title: "Пожелание",
    element: <Card />,
    nav: false,
  },
  {
    path: "/login",
    title: "Войти",
    element: <Login />,
    nav: true,
  },
  {
    path: "/register",
    title: "Зарегистрироваться",
    element: <Register />,
    nav: true,
  },
];
