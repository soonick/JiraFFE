function toggleIcon() {
  var storage = chrome.storage.local;
  storage.get('isActive', function(val) {
    if (val.isActive) {
      chrome.browserAction.setIcon({ path: 'img/jiraffe-off.png' });
      storage.set({ 'isActive': false });
    } else {
      chrome.browserAction.setIcon({ path: 'img/jiraffe-on.png' });
      storage.set({ 'isActive': true });
    }
  });
}

function initializeIcon() {
  chrome.storage.local.get('isActive', function(val) {
    if (val.isActive) {
      chrome.browserAction.setIcon({ path: 'img/jiraffe-on.png' });
    } else {
      chrome.browserAction.setIcon({ path: 'img/jiraffe-off.png' });
    }
  });
}

chrome.browserAction.onClicked.addListener(function(Tab){
  toggleIcon();
});

initializeIcon();
