var express = require("express");
var app = express();
var port = process.env.port || 5000;

//---------------------
app.get('/', function(req, res){
	res.send('Welcome to the node heroku.');
});

app.listen(port);