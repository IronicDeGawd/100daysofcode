const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
const PORT = 8000;

//Middleware
app.use(express.json());
app.use(cookie());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

//Test storage
const users = [];
let id = 0;

//Routes
app.get("/", (req, res) => {
  res.send({ key: "pair" });
});

app.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email: email, userId: id }, SECRET_KEY);
    res.cookie("_Auth_Token", token, 43200000);
    const user = { id: id, email: email, password: hashedPassword }; //token expires in 12 hours
    users.push(user);
    id++;
    console.log("Logged user: " + user.id + user.email);
    res.status(200).send("Logged In!");
  } catch (error) {
    console.log("Error occured" + error);
    res.status(500).send(error);
  }
});

app.get("/login", async (req, res) => {
  if (req.cookies._Auth_Token) {
    res.status(300).send("Already logged in");
  } else {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = users.find((users) => users.email === email);
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          console.log(user);
          const token = jwt.sign(
            { email: user.email, userId: user.id },
            SECRET_KEY
          );
          res
            .cookie("_Auth_Token", token, 43200000)
            .status(200)
            .send("Logged In!");
        }
      } else {
        res.status(400).send("Not authorised or password error");
      }
    } catch (error) {
      console.log("Error occured" + error);
      res.status(500).send(error);
    }
  }
});

app.get("/me", (req, res) => {
  if (req.cookies._Auth_Token) {
    try {
      const token = req.cookies._Auth_Token;
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log(decoded);
      res.status(200).send(decoded);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(500).send("Not logged in!");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("_Auth_Token").send("Logout!");
});

app.listen(PORT, () => {
  console.log(`Running server at http://localhost:${PORT}/`);
});
