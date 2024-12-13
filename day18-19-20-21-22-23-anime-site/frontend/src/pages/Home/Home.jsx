import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../components/common/Loading";
import AnimeGrid from "../../components/AnimeHandler/AnimeGrid";

function Home() {
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [trending, setTrending] = useState([]);

  async function handleTrending() {
    const TrendingUrl = import.meta.env.VITE_API_TRENDING_URL;
    const Api = import.meta.env.VITE_API_KEY;

    try {
      const response = await axios.get(TrendingUrl, {
        headers: {
          "x-api-key": Api,
        },
      });
      const data = response.data;
      if (data.length !== 0) {
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
      {loadingTrending && <Loading />}
      <AnimeGrid resArray={trending} />
    </>
  );
}

export default Home;
