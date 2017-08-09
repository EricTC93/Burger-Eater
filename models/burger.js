// Dependecies
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers",function(res) {
			cb(res);
		});
	},

	insertOne: function(rowData,cb) {
		orm.insertOne("burgers",rowData,function(res) {
			cb(res);
		});
	},

	updateOne: function(newRowData,rowID,cb) {
		orm.updateOne("burgers",newRowData,rowID,function(res) {
			cb(res);
		});
	}
}

// burger.insertOne({burger_name:"Jalapeno Pepper Jack Burger"},function(res) {
// 	console.log(res);
// });

// burger.selectAll(function(res) {
// 	console.log(res);
// });

// burger.updateOne({burger_name:"Triple Cheese Burger"},2,function(res) {
// 	console.log(res);
// });

// burger.selectAll(function(res) {
// 	console.log(res);
// });

module.exports = burger;