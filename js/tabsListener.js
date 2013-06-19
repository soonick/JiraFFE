var callback = function(details) {
  chrome.tabs.executeScript(
    details.tabId,
    {
      file: '/js/createIssue.js'
    }
  );
};

chrome.storage.local.get('urls', function(value) {
  if (value.urls) {
    var filters = {
      urls: [value.urls],
      types: ['main_frame']
    };

    chrome.webRequest.onCompleted.addListener(callback, filters);
  }
});
