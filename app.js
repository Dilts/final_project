var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');
var snow = require('./controllers/request-controller');
 
   snow(function(error, response, body){
   	$ = cheerio.load(body);
   		console.log($('.fc-container').html())

   }) 

mongoose.connect('mongodb://localhost/test_cheerio');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});





var server = app.listen(5959, function() {
	console.log('Express server listening on port ' + server.address().port);
});
