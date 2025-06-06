import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import Contact from "../../pages/Contact";
// import Signup from "../../pages/Signup";
// import NotFound from "../../pages/NotFound";

import { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Signup = lazy(() => import("../../pages/Signup"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Layout = lazy(() => import("./Layout.jsx"));

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const Routing2 = () => {
  return <RouterProvider router={myRoutes}></RouterProvider>;
};

export default Routing2;
