//This a reverse proxy to access external api with cors policies enabled
//axios : http get requests to the external api are handled by it, functions as a alternative to fetch
//express : used to create a webserver and handle requests from the frontend
//cors : to remove the policy issues

const serverless = require("serverless-http");
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const search = "https://anime-api.xyz/search";
const trending = "https://animeapi.skin/trending";
const episodes = "https://animeapi.skin/episodes?url=";

const app = express();

app.use(cors());

app.get("/api/anime/:query/:page?", async (req, res) => {
  const query = req.params.query;
  const page = req.params.page || "1";
  //   console.log(`Client requested ${query}`);

  try {
    const response = await axios.get(search, {
      params: { q: query, page: page },
    });
    res.status(200).json(response.data);
    // console.log("Request served");
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.get("/api/trending", async (req, res) => {
  //   console.log(`Client requested trending`);

  try {
    const response = await axios.get(trending);
    res.status(200).json(response.data);
    // console.log("Request served");
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.get("/api/episodes/:anime?", async (req, res) => {
  //   console.log(`Client requested episodes`);
  const anime = req.params.anime;
  const episodeUrl = episodes + anime;

  try {
    const response = await axios.get(episodeUrl);
    res.status(200).json(response.data);
    // console.log("Request served");
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

const port = 2000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// module.exports.handler = serverless(app);
