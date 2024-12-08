/* eslint-disable react/prop-types */
export default function SearchInput({
  handleEnter,
  handleClick,
  animeSearchRef,
}) {
  return (
    <div className="w-full max-w-xl">
      <input
        onKeyUp={(e) => handleEnter(e)}
        type="text"
        placeholder="Enter Anime Name"
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
        ref={animeSearchRef}
      />
      <button
        className="w-full mt-4 bg-purple-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-800 transition-all"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
