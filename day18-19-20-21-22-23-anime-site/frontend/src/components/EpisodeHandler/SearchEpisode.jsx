/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function SearchEpisode({ episode }) {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleEp = () => {
    const value = parseInt(searchRef.current.value, 10) - 1;

    if (value >= 0 && value < episode.length) {
      navigate("/" + episode[value].link_url);
    } else {
      alert("Invalid Episode 😖");
    }
  };

  return (
    <div className="flex m-2 gap-2">
      <input
        ref={searchRef}
        type="number"
        placeholder="Enter Episode"
        className="text-gray-200 px-2 py-1 bg-violet-800 text-center shadow-md hover:shadow-sm rounded-md"
      />
      <div
        onClick={handleEp}
        className="text-white px-4 py-1 bg-violet-800 hover:bg-violet-900 text-center shadow-md hover:shadow-sm rounded-md"
      >
        Search
      </div>
    </div>
  );
}
