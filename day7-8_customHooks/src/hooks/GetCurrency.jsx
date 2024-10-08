// import React from "react";

import { useEffect, useState } from "react";

function GetCurrency(currency) {
  const [data, setData] = useState({});
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency, url]);
  return data;
}

export default GetCurrency;
