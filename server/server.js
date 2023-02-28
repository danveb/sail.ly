const express = require("express"); 
const colors = require("colors"); 
const dotenv = require("dotenv/config"); 
const cors = require("cors"); 
const port = process.env.PORT || 8801; 

// express app
const app = express(); 

// cors
app.use(cors()); 

// test 
app.get("/", (req, res) => res.send("Hello from Express!")); 

// listen
app.listen(port, () => console.log(`Server started on port ${port}`)); 
