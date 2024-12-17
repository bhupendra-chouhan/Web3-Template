import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Error {err.status} :_(</h1>
      <h2>Requested Page {err.statusText}</h2>
      <p>OOPs Something went wrong!!!</p>
    </div>
  );
};

export default Error;
