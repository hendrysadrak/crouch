"use strict";


;(function ( root, name, definition ) {
    /*
     * Exports
     */
    if ( typeof define === 'function' && define.amd ) {
        define( [], definition );
    }
    else if ( typeof module === 'object' && module.exports ) {
        module.exports = definition();
    }
    else {
        root[ name ] = definition();
    }
})( this, 'crouch', function () {
    /**
     * RegExp to find placeholders in the template
     *
     * http://regexr.com/3eveu
     * @type {RegExp}
     */
    var _re = /{([0-9a-z_]+?)}/ig;


    /**
     * Micro template compiler
     *
     * @param {string} template
     * @param {array|object} values
     * @returns {string}
     */
    var crouch = function ( template, values ) {
        /*
         * Default arguments
         */
        var
            template = template || "",
            values   = values || {};

        var match;

        /*
         * Loop through all the placeholders that matched with regex
         */
        while ( match = _re.exec( template ) ) {
            /*
             * Get value from given values and
             * if it doesn't exist use empty string
             */
            var _value = values[ match[ 1 ] ];
            if ( _value === null || typeof _value === "undefined" ) _value = "";
            _value = String( _value );

            /*
             * Replace the placeholder with a real value.
             */
            template = template.replace( match[ 0 ], _value )
        }

        /*
         * Return the template with filled in values
         */
        return template;
    };

    /**
     * 😎
     */
    return crouch;
} );
