if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
	    return arr.indexOf(item);
    },

    sum : function(arr) {
	    return arr.reduce(function (a, b) { return a + b; });
    },

    remove : function(arr, item) {
    	var i = arr.length;
    	while (i--) {
	    	if (arr[i] === item) {
		    	arr.splice(i, 1);
	    	}
    	}
    
	    return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
	    var i = arr.length;
    	while (i--) {
	    	if (arr[i] === item) {
		    	arr.splice(i, 1);
	    	}
    	}
    
	    return arr;
    },

    append : function(arr, item) {
	    arr.push(item);
	    return arr;
    },

    truncate : function(arr) {
	    arr.pop();
	    return arr;
    },

    concat : function(arr1, arr2) {
	    return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
    	arr.splice(index, 0, item);
	    return arr;
    },

    count : function(arr, item) {
    	return arr.filter(function (elm) { return elm === item; }).length;
    },

    duplicates : function(arr) {
    	var i,
    		j,
    		duplicates = [];
    	// looks like I came up with the smartest implementation
    	// @see http://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array/14348394#14348394
    	for (i = 0, j = arr.length; i < j; i++) {
		  if (duplicates.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i+1) !== -1) {
		    duplicates.push(arr[i]);
		  }
		}
		return duplicates;
    },

    square : function(arr) {
	    return arr.map(function (a) { return a*a; });
    },

    findAllOccurrences : function(arr, target) {
    	var occurences = [];
	    arr.forEach(function (elm, i) {
		    if (elm === target) {
			    occurences.push(i);
		    }
	    });
	    return occurences;
    }
  };
});
