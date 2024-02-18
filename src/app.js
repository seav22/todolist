const express = require("express");
const app = express();
const db = require("./db/db.js");

const Port = 3000;

app.listen(Port, async () => {
  await db.createConnection();
  console.log(`Server initiated succesfully in port ${Port} `);
});
