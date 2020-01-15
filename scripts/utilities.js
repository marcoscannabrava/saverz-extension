
// returns the url between the first and second "."
// e.g. 'www.google.com' -> 'google'
const parseUrl = (url) => {
  const regex = /\.(.*?)\./
  return url.match(regex)[1];
};