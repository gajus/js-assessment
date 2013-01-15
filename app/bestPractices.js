if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
	return {
		globals: function () {
			var myObj = {
				name: 'Jory'
			};
			return myObj;
		},
		functions: function (flag) {
			// or:
			// var getValue ? function () { return 'a'; } : function () { return 'b'; } // for whatever reason you'd want that
			return flag ? 'a' : 'b';
		},
		parseInt: function (num) {
			return parseInt(num, 10);
		},
		identity: function (val1, val2) {
			return val1 === val2;
		}
  };
});
