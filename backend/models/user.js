var Sequelize = require('sequelize');
var mysqlConnection = require('../db/dbconnect');

module.exports = mysqlConnection.sequelize.define(
	'dims_users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},

	name: {
		type: Sequelize.STRING
	},
	department: {
		type: Sequelize.STRING
	},

	title: {
		type: Sequelize.STRING
	},

	email: {
		type: Sequelize.STRING
	},

	password: {
		type: Sequelize.STRING
	},
	roles: {
		type: Sequelize.STRING
	},


},
	{ timestamps: false }
);
