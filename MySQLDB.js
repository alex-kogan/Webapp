// MySQL setup
var MySQLDB = function () {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	        host     : 'sql5.freemysqlhosting.net',
	        user     : 'sql5103708',
	        password : 'LjQFhlXfMF',
	        database : 'sql5103708'
	    });

	var self = this;

	self.connect = function ()
	{
		connection.connect(function(err){
		if(!err) {
		    console.log("Database is connected ... \n\n");    
		} else {
		    console.log("Error connecting database ... \n\n");    
		}
		});
	};
	

	self.query = function (queryText,callback)
	{
		connection.query(queryText, function(err, rows, fields)
		{
			if (err) throw err;
			callback(rows, fields);
		});
	};
};

module.exports = MySQLDB;
