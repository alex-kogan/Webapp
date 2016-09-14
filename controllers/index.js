var MongoDB = require('../MongoDB.js');
var MongoDBInstance = new MongoDB; 
var database = MongoDBInstance.connect('family');

function index(req, res, next)
{
  	res.render('index', {
		title: 'Main Page', 
		site_name: 'Kogans in CH',
  	});
};

/* GET home page. */
module.exports = {
                  'index': index
                 };