// import {React} from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row p-5 justify-around align-middle">
        <div className="font-semibold text-3xl text-gray-700 hover:text-gray-900">
          <Link to="/">ShoeMania</Link>
        </div>
        <ul className="flex gap-2 justify-center text-lg m-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-4 px-7 shadow-md text-gray-800 font-semibold hover:bg-gray-500 rounded-lg ${
                  isActive ? "bg-gray-400" : "bg-gray-300"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-4 px-7 shadow-md text-gray-800 font-semibold hover:bg-gray-500 rounded-lg ${
                  isActive ? "bg-gray-400" : "bg-gray-300"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-4 px-7 shadow-md text-gray-800 font-semibold hover:bg-gray-500 rounded-lg ${
                  isActive ? "bg-gray-400" : "bg-gray-300"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
