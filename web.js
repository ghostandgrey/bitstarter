var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buff;
fs.readFile('index.html', function read(err, data) {
	if (err) {
		throw err;
	}
	buff = data;
});

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
	response.send(buff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
