(function() {
  chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      var tabUrl = new URL(currentTab.url);

      if (tabUrl.origin === "https://teams.microsoft.com" && tabUrl.hash.match(/(meeting|calling)/)) {
        if (command === "open-chat") {
          chrome.tabs.executeScript({
            code: "window.document.querySelector('#chat-button').click();"
          });
        }

        if (command === "open-roster") {
          chrome.tabs.executeScript({
            code: "window.document.querySelector('#roster-button').click();"
          });
        }

        if (command === "open-video") {
          chrome.tabs.executeScript({
            code: "window.document.querySelector('#video-button').click();"
          });
        }

        if (command === "open-share") {
          chrome.tabs.executeScript({
            code: "window.document.querySelector('#share-button').click();"
          });
        }
      }
    });
  });
})();
