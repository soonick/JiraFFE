var callback = function(details) {
  chrome.tabs.executeScript(
    details.tabId,
    {
      file: '/js/createIssue.js'
    }
  );
};

var filters = {
  urls: ['jiraurl'], // We will make this configurable
  types: ['main_frame']
};

chrome.webRequest.onCompleted.addListener(callback, filters);
