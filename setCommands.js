(function() {
  chrome.commands.onCommand.addListener(function(command, tab) {
    var tabUrl = new URL(tab.url);

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
})();
