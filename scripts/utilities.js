const parseUrl = (url) => {
  const regex = /\.(.*?)\./
  return url.match(regex)[1];
};