if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function (data, dirName) {    	   	
    	return (function self(data, includePath) {
    		var fileNames = [];
	    	
	    	data.files.forEach(function (elm) {
		    	if (typeof elm === 'string') {
		    		if (!dirName || includePath) {
			    		fileNames.push(elm);
		    		}
		    	} else {
			    	fileNames = fileNames.concat(self(elm, includePath || elm.dir === dirName));
		    	}
	    	});
	    	
	    	return fileNames;
    	}(data, data.dir === dirName));
    },
    
    permute: function(arr) {
		// ?
    }
  };
});
