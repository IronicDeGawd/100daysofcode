/* eslint-disable react/prop-types */
// import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import AnimeEmbed from "../../components/AnimeEmbed";
import NowWatching from "../../components/NowWatching";

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
    <div className="w-full min-h-screen flex flex-col items-center gap-2 mt-2">
      <NowWatching anime={anime} />
      <div className="w-full flex flex-col justify-center items-center p-2">
        <AnimeEmbed embedURL={embedURL} />
      </div>
      <div className="w-full md:w-2/4 sm:w-3/4">
        <EpidodeInfo anime={anime} />
      </div>
    </div>
  );
}

export default Anime;

import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
function EpidodeInfo({ anime }) {
  const [episode, setEpisode] = useState([]);
  const [epCounter, setEpCounter] = useState(10);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleEp = () => {
    const value = searchRef.current.value;
    searchRef.current.value = "";
    if (value - 1 < episode.length) {
      navigate("/" + episode[value - 1].link_url);
    } else alert("Invalid Episode");
  };

  useEffect(() => {
    const url = import.meta.env.VITE_API_EPISODE_URL;
    const handleEpisode = () => {
      axios.get(url + anime).then((response) => {
        setEpisode(response.data.reverse());
      });
    };
    handleEpisode();
  }, [anime]);

  return (
    <>
      <div className="text-white text-2xl p-2">
        Total Episodes {episode.length}
      </div>
      <div className="flex m-2 gap-2">
        <div
          onClick={handleEp}
          className="text-white px-4 py-1 bg-violet-800 hover:bg-violet-900 text-center shadow-md hover:shadow-sm rounded-md"
        >
          Go To
        </div>
        <input
          ref={searchRef}
          type="number"
          placeholder="Enter Episode"
          className="text-gray-200 px-2 py-1 bg-violet-800 text-center shadow-md hover:shadow-sm rounded-md"
        ></input>
      </div>
      <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12  gap-2">
        {episode && episode.length < 15 ? (
          episode
            .slice()
            .map((data, index) => (
              <EpisodeButton key={index} data={data} index={index} />
            ))
        ) : (
          <>
            {episode &&
              episode
                .slice(0, epCounter)
                .map((data, index) => (
                  <EpisodeButton key={index} data={data} index={index} />
                ))}
            <div
              onClick={() => setEpCounter(epCounter + 10)}
              className="text-white px-2 py-1 bg-violet-800 hover:bg-violet-900 text-center shadow-md hover:shadow-sm rounded-md"
            >
              Next
            </div>
          </>
        )}
      </div>
    </>
  );
}

function EpisodeButton({ data }) {
  const redirectURL = data?.link_url;
  return (
    <Link to={"/" + redirectURL}>
      <div className="text-white px-2 py-1 bg-purple-800 hover:bg-purple-900 text-center shadow-md hover:shadow-sm rounded-md">
        {data?.episode}
      </div>
    </Link>
  );
}
