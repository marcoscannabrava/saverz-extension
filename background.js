// const host = "www.saverz.org"

// Listener for Page Refresh -------------------------------------------------
chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    var parsedUrl = parseUrl(url);
    isCompanyAffiliated(parsedUrl).then((data) => {
      if(data["status"] === "ok") {
        fetchCoupons(parsedUrl).then((coupons) => {
          chrome.browserAction.setBadgeText({text: coupons.length.toString() });
          chrome.tabs.executeScript({code: `var company_id = ${data["id"]};`},
            function() {
              var tab = tabs[0];
              // chrome.tabs.update(tab.id, {url: "https://www.centauro.com.br/"}); code to refreshe using the UTM source.
              // how to make it so the page won't keep auto updating?
              chrome.tabs.executeScript({file: 'scripts/inject-coupon-popup.js'});
            }
          );
        });
      } else {
        chrome.browserAction.setBadgeText({text: "" });
      }
    });
  });
})
// Listener for Page Refresh (END) -------------------------------------------------

// Listener for First Install -------------------------------------------------
chrome.runtime.onInstalled.addListener(function(details){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tab.id, {url: "https://www.saverz.org/dashboard"});
  });
});
// Listener for First Install (END) -------------------------------------------------
