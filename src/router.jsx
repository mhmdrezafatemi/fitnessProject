import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/reset.css";
import "./styles/globalStyles.css";
import MainLayout from "./layout/MainLayout";
import { Children } from "react";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Program from "./pages/Program";
import Trainers from "./pages/Trainers";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "pricing", element: <Pricing /> },
      { path: "program", element: <Program /> },
      { path: "trainers", element: <Trainers /> },
    ],
  },
];
export default routes;
