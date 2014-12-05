// ActionScript Communications Document
var VideoCompressor = function() {
};


// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
VideoCompressor.start = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("VideoCompressor.register failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("VideoCompressor.register failure: success callback parameter must be a function");
        return
    }

    cordova.exec(successCallback, errorCallback, "VideoCompressor", "start", [options]);
};


VideoCompressor.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.videoCompressor = new VideoCompressor();
  return window.plugins.videoCompressor;
};

cordova.addConstructor(VideoCompressor.install);