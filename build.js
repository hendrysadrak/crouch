'use strict';

const
    fs       = require( 'fs' ),
    compiler = require( 'google-closure-compiler-js' ),
    pkg      = require( './package.json' );

const
    _compiled = new Date().toString();

const buildHeader = `/**!
 * Crouch.js – v${pkg.version}
 * Compiled ${_compiled}
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
`;


function compileAndSave( _properties ) {
    const properties = _properties;

    const time1 = Date.now();
    console.info( `\nStarting compilation of ${properties.in}` );

    const jsCode = fs.readFileSync( properties.in, 'utf8' );

    properties.flags.jsCode = [ { src: jsCode } ];

    const _compiled = compiler.compile( properties.flags );

    const time2    = Date.now();
    const timeTook = Math.round( (time2 - time1) / 10 ) / 100;
    console.info( `Compiled in ${timeTook}s` );

    /**
     * Report errors / warnings
     */
    for ( const error of _compiled.errors ) {
        console.error( error );
    }
    for ( const warning of _compiled.warnings ) {
        console.warn( warning );
    }

    /**
     * Write to file
     */
    fs.writeFile( properties.out, (buildHeader + _compiled.compiledCode), () => {
        console.info( `${properties.out} written` );
    } );
    fs.writeFile( `${properties.out}.map`, _compiled.sourceMap, () => {
        console.info( `${properties.out}.map written` );
    } );
}


compileAndSave( {
    in:    './lib/crouch.js',
    out:   './dist/crouch.js',
    flags: {
        createSourceMap:        true,
        languageIn:             'ES6',
        languageOut:            'ES5_STRICT',
        // processCommonJsModules: true,
    }
} );
