/* eslint-disable react/prop-types */
import SearchedFor from "../../components/SearchedFor";
import Loading from "../../components/Loading";
import AnimeArray from "../../components/AnimeArray";

function Home({ animeSearch, loading, error, resArray, trending }) {
  return (
    <>
      {animeSearch && <SearchedFor animeSearch={animeSearch} error={error} />}
      {loading ? <Loading /> : ""}
      {animeSearch && <AnimeArray resArray={resArray} />}
      <AnimeArray resArray={trending} />
    </>
  );
}

export default Home;
