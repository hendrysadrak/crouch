/**!
 * Crouch.js – v0.0.5
 * Compiled Wed Nov 09 2016 16:46:26 GMT+0200 (EET)
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
'use strict';(function(c,a,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof module&&module.exports?module.exports=b():c[a]=b()})(this,"crouch",function(){var c=/{([0-9a-zA-Z]+?)}/g;return function(a,b){a=a||"";b=b||{};for(var d;d=c.exec(a);){var e=b[d[1]];e||(e="");a=a.replace(d[0],e)}return a}});