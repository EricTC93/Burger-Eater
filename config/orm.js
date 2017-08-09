// Dependecies
var connection = require("./connection.js");

var orm = {
	selectAll:function(table,cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString,[table],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	},

	insertOne:function(table,rowData,cb) {
		var queryString = "INSERT INTO ?? SET ?";
		connection.query(queryString,[table,rowData],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	},

	// updateOne:function(table,newRowData,rowID,cb) {
	// 	var queryString = "UPDATE ?? SET ? WHERE ?";
	// 	connection.query(queryString,[table,newRowData,rowID],function(err,res) {
	// 		if (err) throw err;
	// 		cb(res);
	// 	});
	// }

	updateOne:function(table,newRowData,rowID,cb) {
		var queryString = "UPDATE ?? SET ? WHERE ?";
		connection.query(queryString,[table,newRowData,{id:rowID}],function(err,res) {
			if (err) throw err;
			cb(res);
		});
	}
};

// orm.insertOne("burgers",{burger_name:"Jalapeno Pepper Jack Burger"},function(res) {
// 	console.log(res);
// });

// orm.selectAll("burgers",function(res) {
// 	console.log(res);
// });

// orm.updateOne("burgers",{burger_name:"Double Jalapeno Burger"},5,function(res) {
// 	console.log(res);
// });

// orm.selectAll("burgers",function(res) {
// 	console.log(res);
// });

module.exports = orm;