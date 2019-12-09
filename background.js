function fetchData() {
  const url = window.location.href;
  const hostname = window.location.hostname;

  return {
    url: url,
    hostname: hostname
  }
}

function getCouponCount() {
  const data = fetchData()

  if(data.hostname === "www.casasbahia.com.br") {
    return "4";
  } else {
    return "10";
  }
};

chrome.tabs.onActivated.addListener((tab) => {
  console.log(tab)
  chrome.browserAction.setBadgeText({ text: getCouponCount() })
})

// console.log(chrome.browserAction);
// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="#C3413B"'
//   });
// });
