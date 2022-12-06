import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav__container z-50 ">
        <div className="nav__wrapper w-[1120px]  mx-auto flex justify-between items-center py-4">
          <h2 className="nav__title font-sans text-2xl font-bold text-fuchsia-700">
            Pro
            <span className="nav__titleColor text-lg text-red-500 font-bold">
              Reader
            </span>
          </h2>
          <div className="nav__lists ">
            <Link
              className="ml-5 py-2 px-5 rounded-md hover:bg-emerald-400 duration-300 transition-all bg-fuchsia-700 transition-all duration-500 shadow drop-shadow-md shadow-zinc-900"
              to={"/home"}
            >
              Home
            </Link>
            <Link
              className="ml-5 py-2 px-5 rounded-md hover:bg-emerald-400 duration-300 transition-all bg-fuchsia-700 transition-all duration-500 shadow drop-shadow-md shadow-zinc-900"
              to={"/books"}
            >
              Books
            </Link>
            <Link
              className="ml-5 py-2 px-5 rounded-md hover:bg-emerald-400 bg-fuchsia-700 transition-all duration-500 shadow drop-shadow-md shadow-zinc-900"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="ml-5 py-2 px-5 rounded-md hover:bg-emerald-400 bg-fuchsia-700 transition-all duration-500 shadow drop-shadow-md shadow-zinc-900"
              to={"/register"}
            >
              Register
            </Link>
            <Link
              className="ml-5 py-2 px-5 rounded-md hover:bg-emerald-400 bg-fuchsia-700 transition-all duration-500 shadow drop-shadow-md shadow-zinc-900"
              to={"/login"}
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
