var express = require('express');
var router = express.Router();

// MySQL setup
var mysql = require('mysql');
var connection = mysql.createConnection({
        host     : 'sql5.freemysqlhosting.net',
        user     : 'sql5103708',
        password : 'LjQFhlXfMF',
        database : 'sql5103708'
    });

// verify connection
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

function index(req, res, next) {
	connection.query('SELECT * FROM events', function(err, rows, fields) {
		if (err) throw err;
  		res.render('index', { title: 'Example Page', 
							  site_name: 'Backend',
							  data: rows});
  	});
});

/* GET home page. */
router.get('/', index);

module.exports = router;