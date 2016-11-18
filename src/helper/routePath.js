module.exports = function (route) {
  return (process.env.NODE_ENV !== 'production') ? route : '/davidparnell/' ;
};
