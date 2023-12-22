const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "users",
});

module.exports = db;
