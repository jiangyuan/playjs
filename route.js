var fs = require( "fs" );


exports.parse = function( url, res ) {
    var content;
    console.log( "pasre start" );
    if ( url === "/" ) {
        parseContent( "./index.html", res );
        return;
    }

    if ( /\.(?:js|css|htm|html)$/i.test( url ) ) {
        parseContent( "." + url, res );
        return;
    }

}

function parseContent( url, res ) {
    fs.readFile( url, function( error, content ) {
        if ( error ) {
            res.end( "parse error" );
        } else {
            var type = getType( url );
            res.writeHead( 200, "response succussfully", {
                "Content-Length": content.length,
                "Content-Type": type || "text/plain"
            });
            res.end( content );
            console.log( "response succussfully" );
        }
    });
}

function getType( url ) {
    var def = "text/plain";
    if ( !url ) return def;
    var rType = /\.([a-z]+)/i;
    console.log( url );
    var type = {
        js: "application/javascript",
        css: "text/css",
        html: "text/html",
        htm: "text/htm"
    }

    return type[ rType.exec(url)[1] ] || def;
}