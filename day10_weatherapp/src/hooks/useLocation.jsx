import { useEffect, useState } from "react";

function useLocation(city) {
  const apiKey = "";

  const [loc, setLoc] = useState({});

  useEffect(() => {
    const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    if (city) {
      fetch(url2)
        .then((res) => res.json())
        .then((res) => {
          setLoc(res);
        });
    }
  }, [city]);
  return loc;
}

export default useLocation;
