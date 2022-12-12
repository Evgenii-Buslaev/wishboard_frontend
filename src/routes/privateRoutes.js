import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import CardForm from "../components/CardForm/CardForm";

export const privateRoutes = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/cards",
    title: "Wishes",
    element: <CardList />,
  },
  {
    path: "/:id",
    title: "Wish",
    element: <Card />,
  },
  {
    path: "/post_card",
    title: "Create a wish",
    element: <CardForm />,
  },
  {
    path: "/profile",
    title: "Profile",
    element: <Profile />,
  },
];
