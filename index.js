var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 80

app.listen(PORT);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/us', express.static('us'));

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

app.get('/go', function(request, respons) {
	respons.sendFile(__dirname + '/go.html');
});

app.post('/inf', urlencodedParser, function(request, respons) {
	var tt = request.body
	fs.appendFileSync("us/hello.txt", "mstr.unshift('"+tt.opis+"'); \n");
	fs.appendFileSync("us/hello.txt", "mssl.unshift('"+tt.sslk+"'); \n");
	respons.sendFile(__dirname + '/inf.html');
	console.log(tt);
});

app.get('*', function(req, res){ // Страница 404
  res.send('what???', 404);
});