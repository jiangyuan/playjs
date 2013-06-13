var http = require( "http" );
var route = require( "./route.js" );
var port = process.argv[2] || 3000;


http.createServer(function( req, res ) {
    var url = req.url;
    var content = route.parse( url );
    var length;
    var type = getType( url );

    if ( !content ) {
        console.log( "no " + url );
        length = 0;
    } else {
        length = content.length;
    }



    res.writeHead( 200, "response succussfully", {
        "Content-Length": length,
        "Content-Type": type || "text/plain"
    });
    if ( typeof content === "string" ) {
        res.end( content );
    } else {
        res.end( content, "binary" );
    }
    
    console.log( "response succussfully" );
    
}).listen( port );

console.log( "server listening at " + port );

function getType( url ) {
    if ( url === "/" ) {
        return "text/html";
    }
    var def = "text/plain";
    if ( !url ) return def;
    var rType = /\.([a-z]+)/i;
    var type = {
        js: "application/javascript",
        css: "text/css",
        html: "text/html",
        htm: "text/htm",
        jpg: "image/jpg",
        gif: "image/gif",
        png: "image/png"
    }
    return type[ rType.exec(url)[1].toLowerCase() ] || def;
}

