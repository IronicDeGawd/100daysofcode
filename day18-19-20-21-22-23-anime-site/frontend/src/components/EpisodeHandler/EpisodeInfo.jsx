/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import SwitchEpisodes from "./SwitchEpisodes";
import SearchEpisode from "./SearchEpisode";

export default function EpisodeInfo({ anime }) {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_API_EPISODE_URL;
    const Api = import.meta.env.VITE_API_KEY;

    const handleEpisode = async () => {
      try {
        const response = await axios.get(url + anime, {
          headers: {
            "x-api-key": Api,
          },
        });
        const episodes = response.data;
        setEpisode(episodes);
      } catch (error) {
        console.error("Error fetching episode data:", error);
      }
    };

    handleEpisode();
  }, [anime]);

  return (
    <>
      <div className="text-white p-2">
        {/* <div>
          <span className="font-semibold text-2xl">Title: </span>
          <span className="text-xl text-gray-200">
            {episode[currEpIndex]?.title || "Loading..."}
          </span>
        </div> */}
        <div>
          <span className="font-semibold text-2xl">Total Episodes: </span>
          <span className="text-xl text-gray-200">{episode.length}</span>
        </div>
      </div>

      <SearchEpisode episode={episode} />
      <SwitchEpisodes episode={episode} />
    </>
  );
}
