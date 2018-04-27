var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listCities', function(req, res) {
    fs.readFile( __dirname + "/storage/" + "data.json", 'utf8', function(erro, data) {
        console.log( data );
        res.end( data );
    })
})

app.get('/p?tagId=/', function (req, res) {
    // userId is a parameter in the url request
    response.writeHead(200); // return 200 HTTP OK status
    response.end('You are looking for tagId' + request.route.query.tagId);
});


var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})