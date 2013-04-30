var http = require( "http" );
var route = require( "./route.js" );
var port = process.argv[2] || 3000;


http.createServer(function( req, res ) {
    var url = req.url;

    route.parse( url, res );
    
}).listen( port );

console.log( "server listening at " + port );