// chrome.tabs.executeScript(null, { file: "unsticky.js" });

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, { file: "unsticky.js" });
});
