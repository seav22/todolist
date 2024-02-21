const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/db.js");
const router = require("./routes/task.js");

const Port = 3000;

app.use(cors());
app.use(express.json());
app.use("/todolist", router);

app.listen(Port, async () => {
  await db.createConnection();
  console.log(`Server initiated succesfully in port ${Port} `);
});
