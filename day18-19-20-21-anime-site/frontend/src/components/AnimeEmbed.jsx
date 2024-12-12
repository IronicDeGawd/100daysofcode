/* eslint-disable react/prop-types */
import { useState } from "react";
import Loading from "./Loading";

export default function AnimeEmbed({ embedURL }) {
  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="relative w-full sm:w-3/5 pb-[57.25%] sm:pb-[33.9%]">
        <iframe
          className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-2 border-purple-600 ${
            isLoading ? "invisible" : ""
          }`}
          src={embedURL}
          allowFullScreen
          frameBorder="0"
          onLoad={handleLoad}
        ></iframe>
      </div>
    </>
  );
}
