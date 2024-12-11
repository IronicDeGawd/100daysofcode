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
      <iframe
        className={`w-full md:w-3/4 h-[40vh] sm:h-[60vh] rounded-lg shadow-lg border-2 border-purple-600 ${
          isLoading ? "invisible" : ""
        }`}
        src={embedURL}
        allowFullScreen
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe>
    </>
  );
}
