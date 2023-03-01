const express = require("express"); 
const colors = require("colors"); 
const dotenv = require("dotenv").config(); 
const cors = require("cors"); 
const port = process.env.PORT || 8801; 
const clubRoute = require("./routes/clubRoute"); 

// express app
const app = express(); 

// cors
app.use(cors()); 

// body parser JSON 
app.use(express.json()); 

// Route
app.use("/api/clubs", clubRoute); 

// test GET /
app.get("/", (req, res) => {
    res.send("Hello from Express!"); 
}); 

// listen
app.listen(port, () => {
    console.log(`Server started on port ${port}`.yellow.underline)
}); 
