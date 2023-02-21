(function() {
  chrome.commands.onCommand.addListener(function(command, tab) {
    var tabUrl = new URL(tab.url);

    if (tabUrl.origin === "https://outlook.office365.com" || tabUrl.origin === "https://outlook.office.com") {
      if (command === "open-categories") {
        chrome.tabs.executeScript({
          code: "document.getElementById(\"509\").click()"
        });
      }
    }
  });
})();
