"use strict";


/**
 * RegExp to find placeholders in the template
 *
 * http://regexr.com/3e1o7
 * @type {RegExp}
 */
const _re = /{([0-9a-zA-Z]+?)}/g;


/**
 * Micro template compiler
 *
 * @param {string} template
 * @param {array|object} values
 * @returns {string}
 */
const crouch = ( template, values ) => {
    let match;

    // Loop through all the placeholders that matched with regex
    while ( match = _re.exec( template ) ) {
        let _value = values[ match[ 1 ] ];
        if ( !_value ) _value = "";

        // Replace the placeholder with a real value.
        template = template.replace( match[ 0 ], _value )
    }

    return template;
};


/*
 * Export
 */
module.exports = crouch;