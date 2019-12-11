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
