const { jwt } = require('./server/middlewares');
const { logout } = require('./controllers/auth');
const auth_routes = require('./routes/content-api/auth');

module.exports = (plugin) => {
  plugin.middlewares['jwt'] = jwt
  plugin.services['providers-registry'] = require('./server/services/providers-registry');
  plugin.controllers.auth.logout = logout;
  for (const route of auth_routes) {
    plugin.routes['content-api'].routes.push(route);
  }
  return plugin;
};