import Home from "../pages/Home/Home";

interface Route {
  title: string;
  pathname: string;
  element: any;
}

export const routes: Route[] = [
  {
    title: "Home",
    pathname: "/",
    element: Home,
  },
  {
    title: "Meals",
    pathname: "/meals",
    element: Home,
  },
  {
    title: "About Us",
    pathname: "/about-us",
    element: Home,
  },
  {
    title: "Contact Us",
    pathname: "/contact-us",
    element: Home,
  },
];
