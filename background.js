
chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    var parsedUrl = parseUrl(url);
    isCompanyAffiliated(parsedUrl).then((result) => {
      if(result) {
        console.log("company is affiliated");
        fetchCoupons(parsedUrl).then((coupons) => {
          chrome.browserAction.setBadgeText({text: coupons.length.toString() });
          // chrome.browserAction.setPopup({popup: "http://localhost:3000/companies/21"});
        });
      } else {
        chrome.browserAction.setBadgeText({text: "" });
      }
    });
  });
})
