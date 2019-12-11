const fetchCoupons = (parsedUrl) => {
  // fetch(`http://www.saverz.org/api/v1/coupons/company=${parsedUrl}`)
  return fetch(`https://www.saverz.org/api/v1/coupons/?company=${parsedUrl}`)
    .then(response => response.json())
    .then((data) => {
      return data
    });
};

const isCompanyAffiliated = (parsedUrl) => {
  return fetch(`https://www.saverz.org/api/v1/companies/?company=${parsedUrl}`)
    .then(response => response.json())
    .then((data) => {
      return data
    });
}