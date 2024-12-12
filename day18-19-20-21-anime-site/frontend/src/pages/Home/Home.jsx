import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import AnimeArray from "../../components/AnimeArray";

function Home() {
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [trending, setTrending] = useState([]);

  async function handleTrending() {
    const TrendingUrl = import.meta.env.VITE_API_TRENDING_URL;
    try {
      const res = await fetch(TrendingUrl);
      const data = await res.json();
      if (data.length != 0) {
        setLoadingTrending(false);
        setTrending(data);
      } else {
        setLoadingTrending(false);
      }
    } catch (error) {
      setLoadingTrending(false);
      console.log(error + "; No results found");
    }
  }

  useEffect(() => {
    if (window.location.pathname === "/") handleTrending();
  }, []);
  return (
    <>
      <div className="text-white font-semibold text-4xl mt-6 ">
        Popular Anime
      </div>
      {loadingTrending ? <Loading /> : ""}
      <AnimeArray resArray={trending} />
    </>
  );
}

export default Home;
