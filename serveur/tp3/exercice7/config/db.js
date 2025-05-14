// importation des librairies
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config(); // chargement des evariables d'environnement

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool.promise();
