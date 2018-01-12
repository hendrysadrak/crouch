/**!
 * Crouch.js – v0.1.2
 * Compiled Fri Jan 12 2018 17:50:25 GMT+0200 (EET)
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
'use strict';(function(a,c,b){"function"===typeof define&&define.amd?define([],b):"object"===typeof module&&module.exports?module.exports=b():a[c]=b()})(this,"crouch",function(){return function(a,c){a=a||"";c=c||{};for(var b;b=/{([0-9a-z_]+?)}/ig.exec(a);){var d=c[b[1]];null==d&&(d="");d=String(d);a=a.replace(b[0],d)}return a}});