const mysql = require("mysql2/promise");
let connection;

const createConnection = async () => {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todolist",
    password: "pass",
  });
  console.log("Connection successful to the DB");
};

const getConnection = () => {
  return connection;
};

module.exports = {
  createConnection,
  getConnection,
};
