/* eslint-disable react/prop-types */

export default function NowWatching({ anime }) {
  return (
    <div className="w-4/4 flex flex-col md:flex-row gap-4 items-center m-2 ">
      <h1 className="text-gray-100">
        <span className="font-bold text-2xl md:text-3xl">Now Watching: </span>
        <span className="font-medium text-1xl md:text-2xl">
          {anime?.replace(/-/g, " ").toUpperCase()}
        </span>
      </h1>
    </div>
  );
}

// {anime
//     ?.replace(/-/g, " ")
//     .replace(/episode/g, " ")
//     .replace(/\d+/g, " ")
//     .toUpperCase()}
