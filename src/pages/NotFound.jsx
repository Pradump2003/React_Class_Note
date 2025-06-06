import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" h-[90vh] bg-gray-400 flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-bold text-red-500">Not Found</h1>
      <h1 className="text-4xl font-bold">😢</h1>
      <p className="text-center px-16 w-1/2 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button className="text-white bg-blue-500 px-10 py-3 rounded shadow font-bold text-md">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default NotFound;
