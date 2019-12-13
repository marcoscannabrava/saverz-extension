document.body.insertAdjacentHTML('afterbegin', 
  `<style>
  #saverz-popup {
    height: 7rem; width: 25vw;
    position: fixed; top: 0.5rem; right: 0.5rem; margin-left: auto;
    box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.2);
    z-index: 9999999; 
    transition: 0.3s;
  }
  #saverz-popup:hover {
    height: 80vh;
  }
  </style>
  <iframe id='saverz-popup'
  src='https://www.saverz.org/companies/${company_id}'
  frameborder='0px'></iframe>`
);


document.getElementById("saverz-popup").insertAdjacentHTML('afterend', 
  `<style>
  #saverz-close-popup {
    position: fixed; top: 1rem; right: 7rem; margin-left: auto;
    font-size: 32px; text-decoration: none; color: #8A8881;
    transition: 0.3s;
    z-index: 999999999;
  }
  #saverz-close-popup:hover {
    font-size: 38px;
    color: #504e49;
    cursor: pointer;
  }
  </style>
  <span id='saverz-close-popup'>&times;</span>`
);

function closePopups() {
  document.querySelectorAll("#saverz-popup").forEach(element =>
    element.remove()
  );
  document.querySelectorAll("#saverz-close-popup").forEach(element =>
    element.remove()
  );
}

document.getElementById("saverz-close-popup").addEventListener('click', closePopups, true);