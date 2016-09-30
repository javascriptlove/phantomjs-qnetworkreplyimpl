var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    fs.readFile(__dirname + '/main.html', function(err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
});

app.listen(3000, function () {
    console.log('Running on port 3000');
});