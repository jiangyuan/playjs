var fs = require( "fs" );
var path = require("path");


exports.parse = function( url ) {
    var content;
    console.log( "pasre start" );
    if ( url === "/" ) {
        return parseContent( "./index.html" );
    }

    if ( /\.(?:js|css|htm|html)$/i.test( url ) ) {
        return parseContent( "." + url );
    }

    if ( /\.(?:gif|jpg|png)$/i.test( url ) ) {
        return parseBuffer( "." + url );
    }

};

function parseContent( url ) {
    if ( fs.existsSync(url) ) {
        return fs.readFileSync( url, "utf-8" );
    } else {
        return null;
    }
    
}

function parseBuffer( url ) {
    if ( fs.existsSync(url) ) {
        return fs.readFileSync( url );
    } else {
        return null;
    }
}

