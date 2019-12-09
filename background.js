function fetchData() {
  const url = window.location.href;
  const hostname = window.location.hostname;

  return {
    url: url,
    hostname: hostname
  }
}

function getCoupons() {
  /*fetch("http://www.saverz.org/api/v1/coupons")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });*/

};

chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    console.log(url)
  });
})

// console.log(chrome.browserAction);
// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="#C3413B"'
//   });
// });

  /*chrome.browserAction.setBadgeText({ text: getCouponCount() })*/
