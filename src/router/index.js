import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

/** @type {[import("react-router-dom").RouteProps]} */
export const routes = [{ path: "/", element: <Home /> }];

export default createBrowserRouter(routes);
