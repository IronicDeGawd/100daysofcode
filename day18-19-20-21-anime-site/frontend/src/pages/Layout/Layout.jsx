/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Layout({ handleClick, handleEnter, animeSearchRef }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-violet-900 bg- to-purple-950 flex flex-col items-center justify-around gap-4 p-6 text-gray-800">
        <Navbar
          handleClick={handleClick}
          handleEnter={handleEnter}
          animeSearchRef={animeSearchRef}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
