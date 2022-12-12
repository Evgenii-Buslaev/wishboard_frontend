import { Link } from "react-router-dom";
import { privateRoutes } from "../../routes/privateRoutes";
import { publicRoutes } from "../../routes/publicRoutes";

const Navigation = ({ auth }) => {
  const navigaton = auth ? privateRoutes : publicRoutes;
  return (
    <nav>
      {navigaton.map((route) => {
        return route.nav ? (
          <Link key={route.path} to={route.path}>
            {route.title}
          </Link>
        ) : null;
      })}
    </nav>
  );
};

export default Navigation;
