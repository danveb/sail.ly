const { Pool } = require("pg");
require("dotenv").config();
const colors = require("colors");

// connection URI to node-pg (render psql -> deprecated) 
// const connectionString = process.env.PGCONNECTION_URI;

// connection URI to pg (vercel psql) 
const connectionString = process.env.POSTGRES_URL;

// pool connection to local psql
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
