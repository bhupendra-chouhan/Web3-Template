import React from "react";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body/Body";
import Error from "./Error";

const Routing = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routing;
