require("dotenv").config(); 
const colors = require("colors"); 
const port = process.env.PORT || 8801; 
const app = require("./app"); 

// listen
app.listen(port, () => {
    console.log(`Server started on port ${port}`.yellow.underline)
}); 
