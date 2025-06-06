import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between px-5 py-4 items-center text-white shadow-lg">
      <div className="font-semibold text-2xl">Browser-Router</div>
      <section className="flex list-none gap-5 cursor-pointer ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </section>
    </nav>
  );
};

export default MyNavbar;
