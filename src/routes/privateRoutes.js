import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import CardsList from "../components/CardsList/CardsList";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";

export const privateRoutes = [
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
    path: "/post_card",
    title: "Создайте пожелание",
    element: <CardForm />,
    nav: true,
  },
  {
    path: "/profile",
    title: "Профиль",
    element: <Profile />,
    nav: true,
  },
  {
    path: "*",
    title: "404",
    element: <h1>Not Found</h1>,
    nav: false,
  },
];
