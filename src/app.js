const express = require("express");
const app = express();

const mysql = require("mysql2/promise");
const Port = 3000;

app.listen(Port, async () => {
  console.log(`Server initiated succesfully in port ${Port} `);
  // Create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todolist",
    password: "pass",
  });
});
