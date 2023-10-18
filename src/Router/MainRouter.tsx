import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Detail from "../Detailpage/Detail";
export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/detailpage",
    element: <Detail/>
  }
]);
