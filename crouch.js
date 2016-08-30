"use strict";


/**
 * RegExp to find placeholders in the template
 *
 * http://regexr.com/3e1o7
 * @type {RegExp}
 */
var _re = /{([0-9a-zA-Z]+?)}/g;


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
        if ( !_value ) _value = "";

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


//
// // Example:
//
// const
//     template = 'Hello, my name is {0}. I\'m from {1}.',
//     values   = [ 'James', 'Chicago' ];
//
//
// const output = crouch( template, values );
//
//
// console.log( output );
// // Hello, my name is James. I'm from Chicago.
//


/*
 * Export
 */

// CommonJS
if ( typeof exports === "object" && exports ) {
    module.exports = crouch;
}

// Browser
else {
    this.crouch = crouch;
}