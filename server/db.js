const mysql = require("mysql");

const pool = mysql.createPool({
  connectLimit: 10,
  user: "root",
  password: "",
  host: "localhost",
  database: "craigs"
});

module.exports = pool;
