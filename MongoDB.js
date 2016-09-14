// MongoDB setup
var MongoDB = function () {
	// define dependincies requierments
	var MongoClient = require('mongodb').MongoClient;
	var self = this;
	// define connection
	var dbUser = 'alx.kogan';
	var dbPassword = 'Al7142Ko';

	var collection;

	self.connect = function (collectionName)
	{
		MongoClient.connect('mongodb://'+dbUser+':'+dbPassword+'@ds019906.mlab.com:19906/kogansch', (err, database) => {
  			if (err) {
   				return console.log(err);
  			}
  			else {
			    console.log("db connected");
			    collection = database.collection(collectionName);
  			}
		});
	};
	// an empty query collects all documents
	self.find = function (query,callback)
	{
    		collection.find(query).toArray(function(err, documents) {
    			callback(documents);
    		});
	};
};

module.exports = MongoDB;