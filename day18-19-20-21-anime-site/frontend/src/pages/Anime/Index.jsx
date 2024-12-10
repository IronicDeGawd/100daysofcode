// import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

function Index() {
  const { anime } = useParams();
  const [embedURL, setEmbedURL] = useState("https://2anime.xyz/embed/");

  useEffect(() => {
    if (anime) {
      setEmbedURL(`https://2anime.xyz/embed/${anime}`);
    }
  }, [anime]);

  return (
    <div className="bg-purple-950 w-full min-h-screen flex flex-col items-center gap-2">
      {/* Header Section */}
      <div className="w-3/4 flex flex-col md:flex-row gap-4 items-center m-4">
        <Link
          to="/"
          className="p-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md shadow-md transition-all"
        >
          Home
        </Link>
        <h1 className="text-gray-100 font-bold text-2xl md:text-3xl">
          {anime
            ?.replace(/-/g, " ")
            .replace(/episode/g, " ")
            .replace(/\d+/g, " ")
            .toUpperCase()}
        </h1>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center items-center p-2">
        <iframe
          className="w-full md:w-3/4 h-[70vh] rounded-lg shadow-lg border-2 border-purple-600"
          src={embedURL}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Index;
