/* eslint-disable react/prop-types */
import { Link } from "react-router";

export default function AnimeList({ data, index }) {
  const url = data.link_url;

  return (
    <>
      <div
        key={index}
        className="bg-transparent border-2 border-purple-600 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        <img
          className="w-full h-48 object-cover"
          src={data.thumbnail_url}
          alt={data.title}
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-200 truncate">
            {data.title}
          </h3>
          <p className="text-sm text-gray-300">Episodes: {data.episode}</p>
          <Link to={"/" + url}>
            <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 transition-all">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
