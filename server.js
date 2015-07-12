// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs 			   = require('fs');		
var request 	   = require('request');

// configuration ===========================================

// config files
var db = require('./config/db');
var apiKey = require('./config/apiKey');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.get('/mock/api/v1/person.json', function(req, res, next){
	fs.readFile('server/yong.json', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		res.json(JSON.parse(data));  	
	});

});

app.get('/api/v1/person.json', function(req, res, next){

	var email = req.query.email;
	var url = 'https://api.fullcontact.com/v2/person.json?email='+email+'&apiKey=' + apiKey.keyValue;
	
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
	    	res.json(JSON.parse(body));  	
		}

	})
});


// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app



