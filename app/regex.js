if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
	    return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
	    return /([a-z])\1/i.test(str);
    },

    endsWithVowel : function(str) {
	    return /[aeiuo]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
	    var match = /(\d{3})/.exec(str);
	    return match === null ? false : match[0];
    },

    matchesPattern : function(str) {
	    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
    },
    isUSD : function(str) {
	    return /^\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/.test(str);
    }
  };
});
