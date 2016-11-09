const crouch = require( 'crouch' );


const
    template = 'Hello, my name is {0}. I\'m from {1}.',
    values   = [ 'James', 'Chicago' ];

const output = crouch( template, values );


console.log( output );
// Hello, my name is James. I'm from Chicago.

