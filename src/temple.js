/**
 * Created by meara on 2016/04/07.
 */
'use strict';
var temple={};
/**
 * 模拟ES6模板字符串
 * @param temp
 * @returns {string}
 * @constructor
 */
temple.ES6=function(temp){
    var temps=temp.split(/\$\{(\w?[^\}]*)\}/g);
    for(var i=1;i<temps.length;i+=2){
        temps[i]=eval(temps[i]);
    }
    return temps.join('');
};
temple.build=function(str){
    var args = arguments;
    var obj = "";
    if (args.length > 2) {
        obj = Array.prototype.slice.call(arguments,1);
    } else if (args.length == 2) {
        switch (Object.prototype.toString.call(args[1])) {
            case '[object Object]':
            case '[object Array]':
                obj = args[1];
                break;
            default:
                obj = Array.prototype.slice.call(arguments,1);
                break;
        }
    }
    return str.replace(/\$\{(\w?[^\}]*)\}/g, function (m, p) {
        var ps = p.split('.');
        var tmp = obj;
        try {
            for (var i in ps) {
                tmp = tmp[ps[i]];
            }
            return tmp ? tmp : "";
        } catch (e) {
            return ""
        }
    });
};