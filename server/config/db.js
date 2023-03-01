const { Pool } = require("pg"); 
require("dotenv").config(); 

// Pool connection to POSTGRESQL 
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT, 
    password: process.env.PGPASSWORD, 
    database: process.env.PGDATABASE, 
}); 

console.log("PostgreSQL connected".cyan.underline); 

module.exports = pool
