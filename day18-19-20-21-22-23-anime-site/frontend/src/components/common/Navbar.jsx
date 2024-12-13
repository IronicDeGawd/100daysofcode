/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router";
import SearchInput from "../SearchInput";

export default function Navbar({ handleClick, handleEnter, animeSearchRef }) {
  return (
    <div className="w-full bg-opacity-20 p-3 flex flex-col md:flex-row justify-between items-center gap-2 border-2 rounded-md border-purple-700 shadow-md bg-gradient-to-r from-violet-800 to-purple-800">
      <Link className="flex flex-col sm:flex-row items-center gap-3" to="/">
        <img className="w-16 sm:w-20 sm:h-20" src="./logo.png" alt="Logo" />
        <p className="text-3xl sm:text-4xl text-gray-200 font-semibold text-center">
          nezukoTV
        </p>
      </Link>

      <div className="flex justify-center md:justify-end gap-4 w-full sm:w-2/4 text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 px-5 flex items-center justify-center font-semibold w-max bg-violet-700 hover:bg-violet-900 text-white rounded-md shadow-md transition-all ${
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
