// ����������� ���� ������� � ���������
var express = require('express');
var app = express();
const PORT = process.env.PORT || 80
// var server = require('http').createServer(app);
var io = require('socket.io').listen(PORT);

// ������������ �����
// server.listen(3000);

// ������������ url ������ � ����������� ������ HTML ��������
app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

// ������ �� ����� �������������
connections = [];

// �������, ������� ��������� ��� ����������� � ��������
// ��������� ��� ����� ������������
io.sockets.on('connection', function(socket) {
	console.log("�������� ����������");
	// ���������� ������ ���������� � ������
	connections.push(socket);

	// �������, ������� ����������� ��� ���������� �� �������
	socket.on('disconnect', function(data) {
		// �������� ������������ �� �������
		connections.splice(connections.indexOf(socket), 1);
		console.log("�����������");
	});

	// ������� ���������� ��������� �� ������-���� ������������
	socket.on('send mess', function(data) {
		// ������ ������� �� �������� ������� 'add mess',
		// ������� ����� ������� � ���� ������������� � � ��� ���������� ����� ��������� 
		io.sockets.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
	});
});