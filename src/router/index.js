import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";

/** @type {[import("react-router-dom").RouteObject]} */
export const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
];

export default createBrowserRouter(routes);
