var $ = {
    byId: function( id ) {
        return document.getElementById( id ) || null;
    },

    byTag: function( tag ) {
        return document.getElementsByTagName( tag )[0] || null;
    },

    byTagAll: function( tag ) {
        return document.getElementsByTagName( tag ) || null;
    }
};