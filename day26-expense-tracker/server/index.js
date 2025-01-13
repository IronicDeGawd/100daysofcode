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
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Test storage
const users = [];
const id = 0;

//Routes
app.get("/", (req, res) => {
  res.send({ key: "pair" });
});

app.post("/register", (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = bcrypt.hash(password);
    const token = jwt.sign({ email: email, userId: id }, SECRET_KEY);
    res.cookie("_Auth_Token", token, 43200000);
    users.push({ email: email, password: hashedPassword });
    id++;
  } catch (error) {} //token expires in 12 hours
});

app.get("/login", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Running server at http://localhost:${PORT}/`);
});
