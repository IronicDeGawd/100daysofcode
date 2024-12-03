import { useEffect, useState } from "react";

function useWeather(lat, lon) {
  const [data, setData] = useState({});
  const apiKey = "";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    if (lat) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    }
  }, [lat, lon]);
  return data;
}

export default useWeather;
