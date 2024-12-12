import "dotenv";
import { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Anime from "./pages/Anime/Anime.jsx";
import Search from "./pages/Search/Search.jsx";
import Layout from "./pages/Layout/Layout.jsx";

export default function App() {
  const navigate = useNavigate();
  const animeSearchRef = useRef(null);

  const handleClick = () => {
    const name = animeSearchRef.current.value;
    animeSearchRef.current.value = "";
    navigate(`/search/${name}`);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Routes>
      s
      <Route
        path="/"
        element={
          <Layout
            handleClick={handleClick}
            handleEnter={handleEnter}
            animeSearchRef={animeSearchRef}
          />
        }
      >
        <Route index element={<Home />}></Route>

        <Route path="/search/:anime" element={<Search />}></Route>
        <Route path="/:anime" element={<Anime />}></Route>
      </Route>
    </Routes>
  );
}
