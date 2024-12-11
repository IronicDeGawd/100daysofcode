/* eslint-disable react/prop-types */
// import React from 'react'
import { Link, NavLink } from "react-router";
import SearchInput from "./SearchInput";

export default function Navbar({ handleClick, handleEnter, animeSearchRef }) {
  return (
    <div className="w-full bg-opacity-20 p-3 flex flex-col md:flex-row justify-between items-center gap-2 border-2 rounded-md border-purple-700 shadow-md bg-gradient-to-r from-violet-800 bg- to-purple-800">
      <Link className="flex flex-col sm:flex-row items-center gap-3" to="/">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20"
          src="./nezukoTV.png"
          alt="Logo"
        />
        <p className="text-3xl sm:text-4xl text-gray-200 font-semibold text-center">
          nezukoTV
        </p>
      </Link>

      <div className="w-3/4 sm:w-2/4 flex justify-center md:justify-end gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 px-5 font-semibold w-max bg-violet-700 hover:bg-violet-900 text-white rounded-md shadow-md transition-all ${
              isActive ? "invisible hidden" : ""
            }`
          }
        >
          Home
        </NavLink>
        <SearchInput
          handleClick={handleClick}
          handleEnter={handleEnter}
          animeSearchRef={animeSearchRef}
        />
      </div>
    </div>
  );
}
