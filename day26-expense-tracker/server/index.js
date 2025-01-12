const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = 8000;

//Middleware
app.use(express.json());
app.use(cookieParser());

//Test storage
const users = [];

//Routes
app.get("/", (req, res) => {
  res.send({ key: "pair" });
});

app.post("/register", (req, res) => {});

app.get("/login", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Running server at http://localhost:${PORT}/`);
});
