document.body.insertAdjacentHTML('afterbegin', 
  `<iframe id='saverz-popup' \
  style='height: 80vh; width: 25vw; \
  position: fixed; top: 0.5rem; right: 0.5rem; margin-left: auto; \
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.2); \
  z-index: 9999999; ' \
  src='https://www.saverz.org/companies/${company_id}' \
  frameborder='0px'></iframe>`
);

document.getElementById("saverz-popup").insertAdjacentHTML('afterend', 
  `<a href="#" id='saverz-close-popup' \
  style='position: fixed; top: 1rem; right: 7rem; margin-left: auto; \
  font-size: 32px; text-decoration: none; color: #8A8881; \
  z-index: 999999999;' \
  >&times;</a>`
);

function closePopups() {
  document.getElementById("saverz-popup").remove();
  document.getElementById("saverz-close-popup").remove();
}

document.getElementById("saverz-close-popup").addEventListener('click', closePopups, true);

