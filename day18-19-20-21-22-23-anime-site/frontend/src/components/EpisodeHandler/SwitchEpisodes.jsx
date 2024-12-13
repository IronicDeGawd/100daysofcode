/* eslint-disable react/prop-types */
import EpisodeButton from "./EpisodeButton";
import { useState } from "react";

export default function SwitchEpisodes({ episode }) {
  const [epCounter, setEpCounter] = useState(10);
  const [isShowAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!isShowAll);
    if (isShowAll) setEpCounter(10);
  };

  return (
    <>
      <div
        onClick={() => toggleShowAll()}
        className="m-2 text-white px-2 py-1 bg-violet-800 hover:bg-violet-900 text-center shadow-md hover:shadow-sm rounded-md"
      >
        {isShowAll ? "Don't Show All" : "Show All"}
      </div>

      <div className="m-2 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
        {isShowAll
          ? episode.map((data, index) => (
              <div key={index}>
                <EpisodeButton data={data} />
              </div>
            ))
          : episode.slice(0, epCounter).map((data, index) => (
              <div key={index}>
                <EpisodeButton data={data} />
              </div>
            ))}

        {!isShowAll && epCounter < episode.length && (
          <div
            onClick={() => setEpCounter(epCounter + 10)}
            className="text-white px-2 py-1 bg-violet-800 hover:bg-violet-900 text-center shadow-md hover:shadow-sm rounded-md"
          >
            Next
          </div>
        )}
      </div>
    </>
  );
}
