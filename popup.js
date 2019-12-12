'use strict';

function click(e) {
  chrome.tabs.executeScript({
    file: 'scripts/inject-coupon-popup.js'
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('send-data');
  button.addEventListener('click', click);
  });

