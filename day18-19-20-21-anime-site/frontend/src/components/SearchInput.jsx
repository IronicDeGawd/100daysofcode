/* eslint-disable react/prop-types */
export default function SearchInput({
  handleEnter,
  handleClick,
  animeSearchRef,
}) {
  return (
    <div className="w-full flex sm:max-w-md relative ">
      <input
        onKeyUp={(e) => handleEnter(e)}
        type="text"
        placeholder="Enter Anime Name"
        className="w-full p-3 border-2 bg-violet-100 text-gray-700 border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800 shadow-md"
        ref={animeSearchRef}
      />
      <button
        onClick={handleClick}
        className="absolute p-2 text-purple-600 right-1 top-1 focus:outline-none"
      >
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}
