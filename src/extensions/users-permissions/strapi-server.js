const { jwt } = require('./server/middlewares');

module.exports = (plugin) => {
  plugin.middlewares['jwt'] = jwt
  plugin.services['providers-registry'] = require('./server/services/providers-registry');
  return plugin;
};