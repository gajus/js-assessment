if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var deff = $.Deferred();
    	setTimeout(function () {
	    	deff.resolve(value);
    	});
    	return deff.promise();
    },

    manipulateRemoteData : function(url) {
    	// MF, wasted 30 minutes until I realised that the setup package included old jQuery version (jQuery JavaScript Library v1.7.1)
    	/*return $.ajax({url: url, dataType: 'json'}).then(function (data) {
    		var people = [],
	    		elm;
	    	for (elm in data.people) {
		    	if (data.people.hasOwnProperty(elm)) {
			    	people.push(data.people[elm].name);
		    	}
	    	}
	    	return people.sort();
    	});*/
    	
    	var deff = $.Deferred();

		$.ajax({url: url, dataType: 'json', success: function (data) {
			var people = [],
				elm;
			for (elm in data.people) {
		    	if (data.people.hasOwnProperty(elm)) {
			    	people.push(data.people[elm].name);
		    	}
			}
			deff.resolve(people.sort());
		}});
		
		return deff.promise();
    }
  };
});
