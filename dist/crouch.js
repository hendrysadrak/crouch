/**!
 * Crouch.js
 * Author: Hendry Sadrak <hendry.sadrak@outlook.com> (http://hendrysadrak.com)
 * License: MIT
 */
(function(c,a,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof module&&module.exports?module.exports=b():c[a]=b()})(this,"crouch",function(){var c=/{([0-9a-zA-Z]+?)}/g;return function(a,b){a=a||"";b=b||{};for(var d;d=c.exec(a);){var e=b[d[1]];e||(e="");a=a.replace(d[0],e)}return a}});