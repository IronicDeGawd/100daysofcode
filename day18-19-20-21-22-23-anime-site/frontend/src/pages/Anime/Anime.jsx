// import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import EmbedPlayer from "../../components/AnimeHandler/EmbedPlayer";
import NowWatching from "../../components/NowWatching";
import EpidodeInfo from "../../components/EpisodeHandler/EpisodeInfo";

function Anime() {
  const embed = import.meta.env.VITE_API_EMBED_URL;
  const { anime } = useParams();
  const [embedURL, setEmbedURL] = useState(embed);

  useEffect(() => {
    if (anime) {
      setEmbedURL(embed + anime);
    }
  }, [embed, anime]);

  return (
    <div className="w-full min-h-3/4 flex flex-col items-center gap-2 mt-2">
      <NowWatching anime={anime} />
      <div className="w-full flex flex-col justify-center items-center p-2">
        <EmbedPlayer embedURL={embedURL} />
      </div>
      <div className="w-full md:w-2/4 sm:w-3/4">
        <EpidodeInfo anime={anime} />
      </div>
    </div>
  );
}

export default Anime;
