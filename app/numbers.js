if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
	    // not familiar with binary opeprations
    },

    base10: function(str) {
	    return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		// not familiar with binary opeprations
    },

    multiply: function(a, b) {
		var getMultiplier = function (a) {
			var fraction = (a + '').split('.');
			return fraction[1] ? Math.pow(10, fraction[1].length) : 1;
		};
		
		var aAdjust = getMultiplier(a),
			bAdjust = getMultiplier(b);
		
		return ((a * aAdjust) * (b * bAdjust)) / (aAdjust * bAdjust);
	}
  };
});

