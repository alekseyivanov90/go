var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 80

app.listen(PORT);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

app.get('/ab', function(request, respons) {
    var sser = fs.readFileSync('public/us.txt', 'utf8');
	var tts = sser.slice(17);
	tts = parseInt(tts);
	++tts;
	fs.writeFileSync("public/us.txt", "var use = 'Usser "+tts+"';");
	respons.sendFile(__dirname + '/ab.html');
});
/*
app.get('/st/:mail', function(request, respons) {
	respons.send('mail = ' + request.params.mail);
});
*/

app.get('/help', function(request, respons) {
	respons.send('Мы рады вам помоч');
});

app.get('/I', function(request, respons) {
	respons.send('Ещё не готова');
});

app.get('/users', function(request, respons) {
	respons.sendFile(__dirname + '/users.html');
});

app.get('/mess', function(request, respons) {
	respons.sendFile(__dirname + '/mess.html');
});

app.post('/ab', urlencodedParser, function(request, respons) {
	var tt = request.body
	fs.appendFileSync("public/ls.txt", "as.unshift('"+tt.mail+"'); \n");
	var file_readed = fs.readFileSync('public/ls.txt', 'utf8');
	respons.sendFile(__dirname + '/ab.html');
	/*console.log(file_readed.split('\n').length);
	var fileRows = file_readed.toString().split('\n');
	fileRows = fileRows.shift();
	console.log(tt);*/
});
