// Saves options to localStorage.
function clickHandler() {
  var urlToSave = document.getElementById('urlBox').value;
  chrome.storage.local.set({ urls: urlToSave });
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
