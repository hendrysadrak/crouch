const
    fs      = require( 'fs' ),
    compile = require( 'google-closure-compiler-js' ).compile;


const buildHeader = `/**!
 * Crouch.js
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com> (http://hendrysadrak.com)
 * License: MIT
 */
`;


/**
 * Read javascript from file
 * @type {*}
 */
const jsCode = fs.readFileSync( './lib/crouch.js', { encoding: 'utf8' } );


/**
 * Closure compiler flags
 */
const flags = {
    jsCode: [ { src: jsCode } ],
    createSourceMap: true
};


/**
 * Compiled code
 */
const out = compile( flags );

/**
 * Report errors / warnings
 */
for ( const error of out.errors ) {
    console.error( error );
}
for ( const warning of out.warnings ) {
    console.warn( warning );
}

/**
 * Write to file
 */
fs.writeFile( './dist/crouch.js', buildHeader + out.compiledCode );
fs.writeFile( './dist/crouch.js.map', out.sourceMap );