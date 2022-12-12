import { Routes, Route } from "react-router-dom";

import { publicRoutes } from "../../routes/publicRoutes";
import { privateRoutes } from "../../routes/privateRoutes";

const AppRouter = ({ auth }) => {
  const list = auth ? privateRoutes : publicRoutes;
  return (
    <Routes>
      {list.map((route) => {
        <Route path={route.path} element={route.element} key={route.path} />;
      })}
    </Routes>
  );
};

export default AppRouter;
