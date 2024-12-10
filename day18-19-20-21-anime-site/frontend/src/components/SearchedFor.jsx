/* eslint-disable react/prop-types */
export default function SearchedFor({ anime, error }) {
  return (
    <>
      <div className="mt-6 text-xl font-semibold text-white">
        You searched for: <span className="font-bold">{anime}</span>
      </div>
      {error && error ? (
        <div className="mt-6 text-xl font-semibold text-white">
          No Results Found? Try again maybe!
        </div>
      ) : (
        ""
      )}
    </>
  );
}
