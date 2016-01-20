var MySQLDB = require('../MySQLDB.js');
var MySQLDBInstance = new MySQLDB; 
MySQLDBInstance.connect();

function family(req, res, next)
{
	MySQLDBInstance.query('SELECT * FROM events', function(rows, fields)
  {
		res.render('family', { title: 'Family page', 
							  site_name: 'Backend',
							  data: rows});
  });
};

function familyMember(req, res, next)
{
	var query = "SELECT * FROM events WHERE Name ='" + req.params.name + "'";
	MySQLDBInstance.query(query, function(rows, fields)
  {
		res.render('familyMember', { title: rows[0].Name, 
							  site_name: 'Backend',
								rows: rows,
								fields: fields});
  });
};

module.exports = {
									'family': family,
									'familyMember': familyMember
				 				 };