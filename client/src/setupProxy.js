const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/login', { target: 'http://localhost:3001/' }));
  app.use(proxy("/logout", {target:'http://localhost:3001/'}))
  app.use(proxy('/login/favs', { target: 'http://localhost:3001/' }));
};