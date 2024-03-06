const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const clubRoute = require("./routes/clubRoute");
const userRoute = require("./routes/userRoute");

// express app
const app = express();

// cors
app.use(cors());

// body parser JSON 
app.use(express.json());

// Route
app.use("/api/clubs", clubRoute);
app.use("/api/users", userRoute);

// test GET /
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

module.exports = app
