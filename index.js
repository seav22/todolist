const express = require("express");
const app = express();
const items = [];

const mysql = require("mysql2/promise");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/todolist", function (req, res) {
  res.json({
    items: items,
  });
});

app.post("/todolist", function (req, res) {
  items.push("pagar la luz");
  res.json({
    items: items,
  });
});

app.listen(3000, async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todolist",
    password: "pass",
  });
});
