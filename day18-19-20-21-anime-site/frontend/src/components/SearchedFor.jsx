/* eslint-disable react/prop-types */
export default function SearchedFor({ animeSearch, error }) {
  return (
    <>
      <div className="mt-6 text-xl font-semibold text-white">
        You searched for: <span className="font-bold">{animeSearch}</span>
      </div>
      {error && error ? (
        <div className="mt-10 items-center justify-center text-center text-xl font-semibold text-white">
          <img
            style={{ mixBlendMode: "overlay" }}
            className="w-full rounded-3xl overflow-hidden"
            src="/nezukoConfuse.gif"
          ></img>
          <div className="mt-8"> No Results Found? Try again maybe!</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
