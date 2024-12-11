/* eslint-disable react/prop-types */
import { Link } from "react-router";
export default function SearchInput({
  handleEnter,
  handleClick,
  animeSearchRef,
}) {
  return (
    <div className="w-full min-w-sm max-w-md flex relative">
      <input
        onKeyUp={(e) => handleEnter(e)}
        type="text"
        placeholder="Enter Anime Name"
        className="w-full p-3 border-2 bg-violet-100 text-gray-700 border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800 shadow-md"
        ref={animeSearchRef}
      />
      <Link
        className="absolute p-2 text-purple-600 right-1 top-1"
        onClick={handleClick}
        to="/"
      >
        <span className="material-symbols-outlined">search</span>
      </Link>
    </div>
  );
}
