import React from "react";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NftList from "./Body/NftList/NftList";
// import CreateNft from "./Body/CreateNft/CreateNft";
import Error from "./Error";

const Routing = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        // {
        //   path: "/create-nft",
        //   element: <CreateNft />,
        // },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routing;
