function toggleIcon() {
  var storage = chrome.storage.local;
  storage.get('isActive', function(val) {
    if (val.isActive) {
      chrome.browserAction.setIcon({ path: 'img/jiraffe.jpg' });
      storage.set({ 'isActive': false });
    } else {
      chrome.browserAction.setIcon({ path: 'img/jiraffe2.jpg' });
      storage.set({ 'isActive': true });
    }
  });
}

function initializeIcon() {
  chrome.storage.local.get('isActive', function(val) {
    if (val.isActive) {
      chrome.browserAction.setIcon({ path: 'img/jiraffe2.jpg' });
    } else {
      chrome.browserAction.setIcon({ path: 'img/jiraffe.jpg' });
    }
  });
}

chrome.browserAction.onClicked.addListener(function(Tab){
  toggleIcon();
});

initializeIcon();
