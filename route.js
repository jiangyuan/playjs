var fs = require( "fs" );

exports.parse = function( url, res ) {
    var content;
    console.log( "pasre start" );
    if ( url === "/" ) {
        parseContent( "./index.html", res );
        return;
    }

    if ( /\.(js|css|htm|html)$/.test( url ) ) {
        parseContent( "." + url, res );
    }

}

function parseContent( url, res ) {
    fs.readFile( url, function( error, content ) {
        if ( error ) {
            res.end( "parse error" );
        } else {
            res.end( content );
            console.log( "response succussfully" );
        }
    });
}