const
    fs      = require( 'fs' ),
    compiler = require( 'google-closure-compiler-js' ),
    package = require( './package.json' );

const
    _compiled = new Date().toString();

const buildHeader = `/**!
 * Crouch.js – v${package.version}
 * Compiled ${_compiled}
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
`;


/**
 * Read javascript from file
 * @type {*}
 */
const jsCode = fs.readFileSync( './lib/crouch.js', 'utf8' );


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
const out = compiler.compile( flags );

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