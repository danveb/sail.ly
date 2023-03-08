const { Pool } = require("pg"); 
require("dotenv").config(); 
const colors = require("colors"); 

// Connection URI to node-pg 
const connectionString = process.env.PG_CONNECTION_STRING; 

// Pool connection to local postgresql
// const pool = new Pool({
//     host: process.env.PGHOST, 
//     user: process.env.PGUSER, 
//     port: process.env.PGPORT, 
//     password: process.env.PGPASSWORD, 
//     database: process.env.PGDATABASE
// }); 

// Pool connection for deployment
const pool = new Pool({
    connectionString, 
});

console.log("PostgreSQL connected".cyan.underline); 

module.exports = pool
