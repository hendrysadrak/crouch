# crouch

Crouch is a micro JS template engine. I created this because I had a need for supersmall and lightweight module which would replace some strings inside templates. Templates were as strings like `Hello, my name is {name}. I'm from {city}.` or as HTML like `<p class="{className}">{paragraphContent}</p>`. So I created `crouch`. It can replace placeholders formated as `{number|string}` in example `{0}` `{1}` `{hello}` `{World}`.


## Installation

The module is intended to be used in browsers as well as in Node.js


Using npm:
```
npm install --save crouch
```

In browser get the code from https://github.com/hendrysadrak/crouch/blob/master/crouch.js or:
```
<script src="https://cdn.rawgit.com/hendrysadrak/crouch/master/crouch.js"></script>
```


## Usage

```
'use strict';

var crouch = require('crouch');

// or if es6
import crouch from 'crouch';
```

Using values as array:

```
var
    template = 'Hello, my name is {0}. I\'m from {1}.',
    values   = [ 'James', 'Chicago' ];


const output = crouch( template, values );


console.log( output );
// Hello, my name is James. I'm from Chicago.
```

Using values as object:

```
var
    template = 'Hello, my name is {name}. I\'m from {city}.',
    values   = { name: 'James', city: 'Chicago' };


const output = crouch( template, values );


console.log( output );
// Hello, my name is James. I'm from Chicago.
```


## License

[MIT](LICENSE)
