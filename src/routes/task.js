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
    const values = [req.body.task_name, new Date(), "pending"];

    const [result] = await db.getConnection().execute(sql, values);

    console.log(result);
    console.log(req.body);

    res.json({
      result,
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const sql = "DELETE FROM `task` WHERE `id` = ? LIMIT 1";
    const values = [req.params.id];

    const [result, fields] = await db.getConnection().execute(sql, values);

    console.log(result);
    console.log(fields);

    res.json({
      result,
    });
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async function (req, res) {
  try {
    const sql =
      "UPDATE `task` SET `task_name` = ?, `due_date` = ?, `status` = ? WHERE `id` = ? LIMIT 1";
    const values = [
      req.body.task_name,
      new Date(),
      req.body.status,
      req.params.id,
    ];

    const [result, fields] = await db.getConnection().execute(sql, values);

    console.log(result);
    console.log(fields);

    res.json({
      result,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
