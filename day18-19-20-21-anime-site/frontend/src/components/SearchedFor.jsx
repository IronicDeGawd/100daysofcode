/* eslint-disable react/prop-types */
export default function SearchedFor({ animeSearch, error }) {
  return (
    <>
      <div className="mt-6 text-xl font-semibold text-white">
        You searched for: <span className="font-bold">{animeSearch}</span>
      </div>
      {error && error ? (
        <div className="mt-10 flex flex-col items-center justify-center text-center text-xl font-semibold text-white">
          <img
            style={{ mixBlendMode: "overlay" }}
            className="w-2/4 rounded-3xl overflow-hidden"
            src="/notfound.gif"
          ></img>
          <div className="mt-8"> No Results Found? Try again maybe!</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
