/**!
 * Crouch.js – v0.1.2
 * Compiled Mon Jan 15 2018 11:31:27 GMT+0200 (EET)
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
'use strict';(function(b,c,a){"function"===typeof define&&define.amd?define([],a):"object"===typeof module&&module.exports?module.exports=a():b[c]=a()})(this,"crouch",function(){return function(b,c){for(var a;a=/{([0-9a-z_]+?)}/ig.exec(b);)b=b.replace(a[0],String(c[a[1]]||""));return b}});