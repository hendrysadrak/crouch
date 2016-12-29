/**!
 * Crouch.js – v0.1.0
 * Compiled Thu Dec 29 2016 14:09:51 GMT+0200 (EET)
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
'use strict';(function(d,a,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof module&&module.exports?module.exports=b():d[a]=b()})(this,"crouch",function(){var d=/{([0-9a-z_]+?)}/ig;return function(a,b){a=a||"";b=b||{};for(var e;e=d.exec(a);){var c=b[e[1]];if(null===c||"undefined"===typeof c)c="";c=String(c);a=a.replace(e[0],c)}return a}});