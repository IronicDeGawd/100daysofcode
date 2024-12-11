import "dotenv";
import { useRef, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Anime from "./pages/Anime/Anime.jsx";
import Layout from "./pages/Layout/Layout.jsx";

export default function App() {
  const [animeSearch, setAnime] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [resArray, setRes] = useState([]);
  const navigate = useNavigate();

  const animeSearchRef = useRef(null);

  const handleClick = () => {
    setError(false);
    setRes([]);
    setLoading(true);
    const name = animeSearchRef.current.value;
    setAnime(name);
    animeSearchRef.current.value = "";
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setError(false);
      handleClick();
      navigate("/");
    }
  };

  //http://localhost:2000/api/anime/bleach -> using a proxy server running on node to search for the anime data on the external api

  async function handleSearch(animeSearch) {
    const ProxyUrl = import.meta.env.VITE_API_URL;

    if (animeSearch != " ") {
      try {
        // const url = "http://localhost:2000/api/anime/" + anime + "/1";
        const url = ProxyUrl + animeSearch + "/1";
        const res = await fetch(url);
        const data = await res.json();

        //after setting the response in data, we'll check if we are getting a valid response from the server/
        // "" -> means it wasnt able to find any relevant data, so we'll check for length of data and setError to true to display the relevant message/
        //"[{dragon-ball}]" -> means it found some data and we'll setLoading and error false and display the data.

        if (data.length != 0) {
          setLoading(false);
          setTrending(data);
        } else {
          setLoading(false);
          setError(true);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error + "; No results found");
      }
    }
  }

  async function handleTrending() {
    const TrendingUrl = import.meta.env.VITE_API_TRENDING_URL;
    try {
      const res = await fetch(TrendingUrl);
      const data = await res.json();
      if (data.length != 0) {
        setLoading(false);
        setTrending(data);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error + "; No results found");
    }
  }

  useEffect(() => {
    handleTrending();
  }, []);

  useEffect(() => {
    if (animeSearch) {
      handleSearch(animeSearch);
    }
  }, [animeSearch]);

  return (
    <Routes>
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
        <Route
          index
          element={
            <Home
              animeSearch={animeSearch}
              loading={loading}
              error={error}
              resArray={resArray}
              trending={trending}
            />
          }
        ></Route>
        <Route path="/:anime" element={<Anime />}></Route>
      </Route>
    </Routes>
  );
}
