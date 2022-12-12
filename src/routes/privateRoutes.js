import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import CardsList from "../components/CardsList/CardsList";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";

export const privateRoutes = [
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
    path: "/post_card",
    title: "Create a wish",
    element: <CardForm />,
    nav: true,
  },
  {
    path: "/profile",
    title: "Profile",
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
