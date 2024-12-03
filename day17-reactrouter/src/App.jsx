import {} from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <h1 className="text-3xl font-bold underline">This is the ma</h1> */}
      <Outlet />
    </>
  );
}
