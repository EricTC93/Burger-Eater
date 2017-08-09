// Dependecies
var mysql = require("mysql");

// Connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burger_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// connection.query("SELECT * FROM burgers", function(err, res) {
//     if (err) throw err;

//     console.log(res);
// });

// Export connection
module.exports = connection;