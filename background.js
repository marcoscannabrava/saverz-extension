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
// chrome.runtime.onInstalled.addListener(function(details){
//   if(details.reason == "install"){
//       console.log("This is a first install!");
//       console.log(chrome.tabs.getCurrent)
//   }else if(details.reason == "update"){
//       var thisVersion = chrome.runtime.getManifest().version;
//       console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
//   }
// });
// Listener for First Install (END) -------------------------------------------------
