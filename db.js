import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.password);

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "users",
});

export default pool;
