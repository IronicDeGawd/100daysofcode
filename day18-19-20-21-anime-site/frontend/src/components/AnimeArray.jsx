/* eslint-disable react/prop-types */
import AnimeList from "../components/AnimeList";

export default function AnimeArray({ resArray }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-7xl">
        {resArray &&
          resArray.map((data, index) => (
            <AnimeList key={index} data={data} index={index} />
          ))}
      </div>
    </>
  );
}
