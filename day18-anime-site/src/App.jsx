import { useRef, useState, useEffect } from "react";
import AnimeSearchList from "./components/AnimeSearchList";

function App() {
  const [anime, setAnime] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resArray, setRes] = useState([]);

  const animeSearchRef = useRef(null);

  const handleClick = () => {
    setLoading(true);
    const name = animeSearchRef.current.value;
    setAnime(name);
    animeSearchRef.current.value = "";
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  async function handleSearch(anime) {
    if (anime != " ") {
      try {
        const url = "https://anime-api.xyz/search?q=" + anime + "&page=1";
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setLoading(false);
          console.log(data);
          setRes(data);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (anime) {
      handleSearch(anime);
    }
  }, [anime]);

  return (
    <div className="min-h-screen bg-purple-950 flex flex-col items-center p-6 text-gray-800">
      <div className="w-full max-w-xl">
        <input
          onKeyUp={(e) => handleEnter(e)}
          type="text"
          placeholder="Enter Anime Name"
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
          ref={animeSearchRef}
        />
        <button
          className="w-full mt-4 bg-purple-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-800 transition-all"
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      {anime && (
        <div className="mt-6 text-xl font-semibold text-white">
          You searched for: <span className="font-bold">{anime}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-5xl">
        {resArray &&
          resArray.map((data, index) => (
            /* resArray.slice(0, 6).map((data, index) => ( */
            <AnimeSearchList key={index} data={data} index={index} />
          ))}
      </div>
    </div>
  );
}

export default App;

///https://www.2embed.cc/anime/bleach-thousand-year-blood-war-the-conflict-19322
//<iframe src="https://2anime.xyz/embed/one-piece-episode-1" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
