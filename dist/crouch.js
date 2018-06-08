/**!
 * Crouch.js – v0.1.2
 * Compiled Fri Jun 08 2018 17:09:18 GMT+0300 (EEST)
 * @author: Hendry Sadrak (https://www.hendrysadrak.com)
 * @license: MIT
 * http://www.opensource.org/licenses/mit-license
 * see: https://github.com/hendrysadrak/crouch for details
 */
'use strict';(function(b,d,a){"function"===typeof define&&define.amd?define([],a):"object"===typeof module&&module.exports?module.exports=a():b[d]=a()})(this,"crouch",function(){return function(b,d){for(var a,c={};a=/{([0-9a-z_]+?)}/ig.exec(b);)c._value=String(d[a[1]]||""),b="$"===c._value[0]?b.replace(a[0],function(a){return function(){return a._value}}(c)):b.replace(a[0],c._value),c={_value:c._value};return b}});