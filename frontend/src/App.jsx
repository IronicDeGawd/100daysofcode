import "dotenv";
import { useRef, useState, useEffect } from "react";
import AnimeSearchList from "./components/AnimeSearchList";
import SearchInput from "./components/SearchInput";
import SearchedFor from "./components/SearchedFor";

function App() {
  const [anime, setAnime] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resArray, setRes] = useState([]);

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
    }
  };

  //http://localhost:2000/api/anime/bleach -> using a proxy server running on node to search for the anime data on the external api

  async function handleSearch(anime) {
    const searchURL = import.meta.env.VITE_APP_URL;
    const url = searchURL + anime + "/1";
    console.log(import.meta.env.VITE_APP_URL);

    if (anime != " ") {
      try {
        const res = await fetch(url);
        const data = await res.json();

        //after setting the response in data, we'll check if we are getting a valid response from the server/
        // "" -> means it wasnt able to find any relevant data, so we'll check for length of data and setError to true to display the relevant message/
        //"[{dragon-ball}]" -> means it found some data and we'll setLoading and error false and display the data.

        if (data.length != 0) {
          setLoading(false);
          setRes(data);
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

  useEffect(() => {
    if (anime) {
      handleSearch(anime);
    }
  }, [anime]);

  return (
    <div className="min-h-screen bg-purple-950 flex flex-col items-center p-6 text-gray-800">
      <SearchInput
        handleClick={handleClick}
        handleEnter={handleEnter}
        animeSearchRef={animeSearchRef}
      />

      {anime && <SearchedFor anime={anime} error={error} />}
      {loading ? (
        <div className="mt-20 text-center text-xl font-semibold text-white">
          <img
            style={{ mixBlendMode: "hard-light" }}
            className="w-28 h-28 rounded-full overflow-hidden"
            src="/loadingoptimize.gif"
          ></img>
          <div className="mt-4">Loading ...</div>
        </div>
      ) : (
        ""
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-5xl">
        {resArray &&
          resArray.map((data, index) => (
            <AnimeSearchList key={index} data={data} index={index} />
          ))}
      </div>
    </div>
  );
}

export default App;
