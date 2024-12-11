// import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AnimeEmbed from "../../components/AnimeEmbed";

function Anime() {
  const { anime } = useParams();
  const [embedURL, setEmbedURL] = useState("https://2anime.xyz/embed/");

  useEffect(() => {
    if (anime) {
      setEmbedURL(`https://2anime.xyz/embed/${anime}`);
    }
  }, [anime]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-2 mt-2">
      <div className="w-4/4 flex flex-col md:flex-row gap-4 items-center m-2 ">
        <h1 className="text-gray-100">
          <span className="font-bold text-2xl md:text-3xl">Now Watching: </span>
          <span className="font-medium text-1xl md:text-2xl">
            {anime
              ?.replace(/-/g, " ")
              .replace(/episode/g, " ")
              .replace(/\d+/g, " ")
              .toUpperCase()}
          </span>
        </h1>
      </div>

      <div className="w-full flex flex-col justify-center items-center p-2">
        <AnimeEmbed embedURL={embedURL} />
      </div>
    </div>
  );
}

export default Anime;
