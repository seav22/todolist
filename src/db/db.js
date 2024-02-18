const mysql = require("mysql2/promise");

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todolist",
    password: "pass",
  });
  console.log("Connection successful to the DB");
};

module.exports = {
  createConnection,
};
