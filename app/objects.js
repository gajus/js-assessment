if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
	    return fn.apply(obj, [].slice.call(arguments));
    },

    alterObjects : function(constructor, greeting) {
	    constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
	    var val,
	    	result = [];
	    for (val in obj) {
		    if (obj.hasOwnProperty(val)) {
			    result.push( val + ': ' + obj[val] );
		    }
	    }
	    // or I could have used Object.getOwnPropertyNames
	    return result;
    }
  };
});
