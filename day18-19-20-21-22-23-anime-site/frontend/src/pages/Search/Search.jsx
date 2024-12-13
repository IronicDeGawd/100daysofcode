import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SearchedFor from "../../components/SearchedFor";
import Loading from "../../components/common/Loading";
import AnimeGrid from "../../components/AnimeHandler/AnimeGrid";

export default function Search() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resArray, setRes] = useState([]);

  const { anime } = useParams();

  async function handleSearch(animeSearch) {
    setRes([]);
    const ProxyUrl = import.meta.env.VITE_API_URL;
    const Api = import.meta.env.VITE_API_KEY;

    if (animeSearch != " ") {
      try {
        // const url = "http://localhost:2000/api/anime/" + anime + "/1";
        const url = ProxyUrl + animeSearch + "/1";
        const res = await axios.get(url, {
          headers: {
            "x-api-key": Api,
          },
        });
        const data = res.data;

        //after setting the response in data, we'll check if we are getting a valid response from the server/
        // "" -> means it wasnt able to find any relevant data, so we'll check for length of data and setError to true to display the relevant message/
        //"[{dragon-ball}]" -> means it found some data and we'll setLoading and error false and display the data.

        if (data.length != 0) {
          setLoading(false);
          setRes(data);
        } else {
          setLoading(false);
          setError(true);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error + "; No results found");
      }
    }
  }

  useEffect(() => {
    setError(false);
    setLoading(true);
    handleSearch(anime);
  }, [anime]);

  return (
    <>
      {anime && <SearchedFor animeSearch={anime} error={error} />}
      {loading ? <Loading /> : ""}
      {resArray && <AnimeGrid resArray={resArray} />}
    </>
  );
}
