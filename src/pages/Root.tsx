import { Routes, Route } from "react-router";
import { routes } from "../utils/routes";

const Root = () => {
  return (
    <Routes>
      {routes.map((item, i) => (
        <Route key={i} path={item.pathname} element={<item.element />} />
      ))}
    </Routes>
  );
};

export default Root;
