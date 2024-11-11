const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const User = require("./models/User");

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await User.create({ username, password });
});

app.listen(PORT);
