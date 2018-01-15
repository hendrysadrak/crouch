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
  // /**
  //  * RegExp to find placeholders in the template
  //  *
  //  * http://regexr.com/3eveu
  //  * @type {RegExp}
  //  */
  // const _re = /{([0-9a-z_]+?)}/ig;


  /**
   * Micro template compiler
   *
   * @param {string} template
   * @param {array|object} values
   * @returns {string}
   */
  const crouch = ( template, values ) => {
    /*
     * Loop through all the placeholders that matched with regex
     */
    let match;
    while ( match = /{([0-9a-z_]+?)}/ig.exec( template ) ) {
      /*
       * Get value from given values and
       * if it doesn't exist use empty string
       */
      const _value = String( values[ match[ 1 ] ] || "" );

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
