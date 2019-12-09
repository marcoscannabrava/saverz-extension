function parseUrl(url) {
  const regex = /\.(.*?)\./
  return url.match(regex)[1];
};

function fetchCoupons(parsedUrl) {
  // fetch(`http://www.saverz.org/api/v1/coupons/company=${parsedUrl}`)
  fetch(`http://localhost:3000/api/v1/coupons/?company=${parsedUrl}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};


chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    var parsedUrl = parseUrl(url);
    fetchCoupons(parsedUrl);
  });
})
