# crouch

[![NPM](https://nodei.co/npm/crouch.png?compact=true)](https://nodei.co/npm/crouch/)

Crouch is a micro JS template engine. I created this because I had a need for supersmall and lightweight module which would replace some strings inside templates. Templates were as strings like `Hello, my name is {name}. I'm from {city}.` or as HTML like `<p class="{className}">{paragraphContent}</p>`. 

So I created `crouch`. It can replace placeholders formated as `{number|string}` in example `{0}` `{1}` `{hello}` `{World}`.


## Installation

The module is intended to be used in browsers as well as in Node.js


Using npm:
```
npm install --save crouch
```

In browser get the code from https://github.com/hendrysadrak/crouch/blob/master/crouch.js or:
```html
<script src="https://cdn.rawgit.com/hendrysadrak/crouch/master/crouch.js"></script>
```


## Try

You can try crouch in action [here on Tonicdev](https://tonicdev.com/hendrysadrak/crouch-example-1)


## Usage

```javascript
'use strict';

var crouch = require('crouch');

// or if es6
import crouch from 'crouch';
```

Using values as array:

```javascript
var
    template = 'Hello, my name is {0}. I\'m from {1}.',
    values   = [ 'James', 'Chicago' ];


var output = crouch( template, values );


console.log( output );
// Hello, my name is James. I'm from Chicago.
```

Using values as object:

```javascript
var
    template = 'Hello, my name is {name}. I\'m from {city}.',
    values   = { name: 'James', city: 'Chicago' };


var output = crouch( template, values );


console.log( output );
// Hello, my name is James. I'm from Chicago.
```


## Todo

* Add support for getter/setter functions
* Add support for loops
* Add support for if/elseif/else


## License

[MIT](LICENSE)
