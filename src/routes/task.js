const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/", async function (req, res) {
  try {
    const [results] = await db.getConnection().query("SELECT * FROM `task`");

    console.log(results); // results contains rows returned by server

    res.json({
      results,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async function (req, res) {
  try {
    const sql =
      "INSERT INTO `task`(`task_name`, `due_date`,`status`) VALUES (?, ?, ?)";
    const values = ["limpiar ventanas", new Date(), "done"];

    const [result] = await db.getConnection().execute(sql, values);

    console.log(result);

    res.json({
      result,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
