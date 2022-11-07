import { Routes, Route } from "react-router";
import { routes } from "../utils/routes";

const Root = () => {
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.pathname} element={<item.element />} />
      ))}
    </Routes>
  );
};

export default Root;
