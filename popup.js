'use strict';

function clickCoupon(e) {
  chrome.tabs.executeScript({
    file: 'scripts/inject-coupon-popup.js'
  });
  window.close();
}

function clickSaverz(e) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tab.id, {url: "https://www.saverz.org/"});
  });
}
function clickAbout(e) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tab.id, {url: "https://www.lewagon.com/rio"});
  });
}
document.addEventListener('DOMContentLoaded', function () {
  const couponBtn = document.getElementById('coupons-btn');
  const saverzBtn = document.getElementById('saverz-btn');
  const aboutBtn = document.getElementById('about-btn');
  couponBtn.addEventListener('click', clickCoupon);
  saverzBtn.addEventListener('click', clickSaverz);
  aboutBtn.addEventListener('click', clickAbout);
});

