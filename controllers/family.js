var MongoDB = require('../MongoDB.js');
var MongoDBInstance = new MongoDB; 
var database = MongoDBInstance.connect('family');

function family(req, res, next)
{
	MongoDBInstance.find({}, function(documents)
  {
		res.render('family', { title: 'Family page', 
							  site_name: 'Backend',
							  data: documents});
  });
};

function familyMember(req, res, next)
{
	var query = {first_name: req.params.name.split(' ')[0]};
	//var query = "SELECT * FROM events WHERE Name ='" + req.params.name + "'";
	MongoDBInstance.find(query, function(documents)
  {
		res.render('familyMember', {
			title: documents[0].Name, 
			site_name: 'Backend',
			data: documents});
  });
};

module.exports = {
						'family': family,
						'familyMember': familyMember
	 				 };