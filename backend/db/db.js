//Database connection string

var mysql = require('mysql');

var mysqlConnection = mysql.createPool({
	connectionLimit : 10,
host: 'localhost',
port: '', //3306 on remote server
user: 'root', //capep
password: 'Root@root2020', // capep_kenya
database: 'dims'
});

mysqlConnection.getConnection((err, connection) => {
	if(err) {
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
		 console.error('Database connection was closed. ');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
		 console.error('Database has too many connections.');
		}
		if(err.code === 'ECONNREFUSED') { 
		 console.error('database connection was resfused. ');
		}
	}
	console.log("Database connection established")
	if (connection) connection.release();
	return;
})

module.exports = mysqlConnection

