var exec = require("cordova/exec");
module.exports = {
	 start: function(success, failure) {
       exec(successCallback, errorCallback, "VideoCompressor", "start", []);
    }
	
};