var type = (function() {
    var ts = Object.prototype.toString,
        t = [ "Boolean", "String", "Number", "Object", "Array", "Function", "Date", "RegExp", "Error" ],
        map = {};
    for ( var i = 0, l = t.length; i < l; i++ ) {
        map[ "[object " + t[i] + "]" ] = t[i].toLowerCase();
    }

    return function( obj ) {
        if ( obj == null ) {
            return obj + "";
        }

        return typeof obj === "object" || typeof obj === "function" ?
            map[ ts.call(obj) ] || "object"
            : typeof obj;
    }
})();

var $ = {
    isArray: function( obj ) {
        return type( obj ) === "array";
    },
    isPlainObject: function( obj ) {
        return type( obj ) === "object";
    },
    isFunction: function( obj ) {
        return type( obj ) === "function";
    }
};


function extend() {
    var options, name, copyIsArray, clone,
        target = arguments[0] || {},
        deep = false,
        i = 1,
        length = arguments.length;

    if ( typeof target === "boolean" ) {
        deep = target;
        target = arguments[ i ] || {};

        i++;
    }

    if ( typeof target !== "object" && !$.isFunction(target) ) {
        target = {};
    }


    if ( i === length ) {
        target = {};

        i--;
    }

    

    for ( ; i < length; i++ ) {
        if ( (options = arguments[i]) != null ) {
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];
                
                if ( src === copy ) {
                    continue;
                }

                if ( deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy))) ) {
                    if ( copyIsArray ) {
                        copyIsArray = false;

                        clone = src && $.isArray( src ) ? src : [];
                    } else {
                        clone = src && $.isPlainObject( src ) ? src : {};
                    }

                    target[ name ] = extend( deep, clone, copy );
                } else if ( copy !== undefined ) {
                    target[ name ] = copy;
                }
            }
        }
    }

    return target;
}