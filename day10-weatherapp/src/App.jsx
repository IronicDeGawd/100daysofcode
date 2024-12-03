import { useState, useEffect } from "react";
import useLocation from "./hooks/useLocation";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [weather, setWeather] = useState({});
  const [active, setActive] = useState(false);

  const cityLoc = useLocation(city);

  useEffect(() => {
    {
      if (cityLoc.length > 0 && active != false) {
        setLat(cityLoc[0].lat);
        setLon(cityLoc[0].lon);
        // console.log(cityLoc[0].lon, cityLoc[0].lat);
      }
    }
  }, [cityLoc, active]);

  const weatherInfo = useWeather(lat, lon);

  useEffect(() => {
    {
      setWeather(weatherInfo);
    }
  }, [lat, lon, weatherInfo]);

  return (
    <>
      <div className="flex flex-col items-center justify-center border border-neutral-400 rounded-md w-2/4 mx-auto p-5">
        <div>
          <h1 className="mt-5 mb-5 text-3xl">Weather App</h1>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setActive(true);
              setCity("");
              console.log(weather);
            }}
          >
            <input
              className="rounded-md border border-neutral-800 p-3 w-80"
              type="text"
              placeholder="Enter Location"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
            <button
              className="p-3 mx-3 bg-blue-500 rounded-md hover:bg-blue-700 text-white "
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="text-center mt-5 border border-neutral-800 rounded-md p-2">
            {/* <p>City: {city}</p> */}
            <ul>
              <li>
                City:
                {weather?.name ? ` ${weather.name}` : " ..."}
              </li>
              <li>
                Latitude:
                {lat ? ` ${lat}` : " ..."}
              </li>
              <li>
                Longitude:
                {lon ? ` ${lon}` : " ..."}
              </li>
              <li>
                Temperature:{" "}
                {weather?.main?.temp ? ` ${weather.main.temp} °C` : " ..."}
              </li>
              <li>
                Humidity:{""}
                {weather?.main?.humidity
                  ? ` ${weather.main.humidity} `
                  : " ..."}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
