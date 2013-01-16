if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
	    return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
	    return fn.call(obj);
    },
    
    // I might have misunderstood this one.
    functionFunction : function(str) {
    	return function (s) {
	    	return str + ', ' + s;
    	};
    },

    makeClosures : function(arr, fn) {
    	var result = [];
    	// I guess you were expecting me to use IIFE or a dedicated function. Nah. This is easier.
    	arr.forEach(function (elm) {
	    	result.push(function () {
		    	return fn(elm);
	    	});
    	});
    	return result;
    },

    partial : function(fn, str1, str2) {
	    return function (str3) {
		    return fn.call(null, str1, str2, str3);
	    };
    },

    useArguments : function() {
	    return [].slice.call(arguments).reduce(function (a, b) {
		    return a + b;
	    });
    },

    callIt : function(fn) {
	    return fn.apply(null, [].slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
	    var args = [].slice.call(arguments, 1);
	    
	    return function () {
		    return fn.apply(null, args.concat([].slice.call(arguments)) );
	    };
    },
    
    // Whole test 5 minutes. This function 55 minutes. I don't understand why the test is expecting one argument.
	curryIt: function(fn) {
		var args = [].slice.call(arguments, 1),
			fnLength = fn.length;
		
		return function self(redundant) {
				args = args.concat([].slice.call(arguments));
			if (fnLength === args.length) {
				return fn.apply(null, args);
			} else {
				return self;
			}
		};
	}
  };
});
