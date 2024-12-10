const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

//This a reverse proxy to access external api with cors policies enabled
//axios : http get requests to the external api are handled by it, functions as a alternative to fetch
//express : used to create a webserver and handle requests from the frontend
//cors : to remove the policy issues

const axios = require("axios");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 2000;
const search = process.env.SEARCH_API || "https://anime-api.xyz/search";

const app = express();

app.use(cors());

app.get("/api/anime/:query/:page?", async (req, res) => {
  const query = req.params.query;
  const page = req.params.page || "1";
  console.log(`Client requested ${query}`);

  try {
    const response = await axios.get(search, {
      params: { q: query, page: page },
    });
    res.status(200).json(response.data);
    console.log("Request served");
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
