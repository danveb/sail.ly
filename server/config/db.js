const { Pool } = require("pg"); 
require("dotenv").config(); 
const colors = require("colors"); 

const PGDATABASE = process.env.NODE === "development" ? process.env.PGDATABASE_TEST : process.env.PGDATABASE

// Pool connection to POSTGRESQL 
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT, 
    password: process.env.PGPASSWORD, 
    database: PGDATABASE, 
}); 

console.log("PostgreSQL connected".cyan.underline); 

module.exports = pool
