var callback = function() {
  alert('Do something');
};

var filters = {
  urls: ['*://www.google.com/*'],
  types: ['main_frame']
};

chrome.webRequest.onCompleted.addListener(callback, filters);
