var http = require('http');
var server = http.createServer(function(req, res) {
    console.log(req, res);
});

server.listen('23232');