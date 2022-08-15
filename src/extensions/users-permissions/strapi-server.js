const { jwt } = require('./server/middlewares');

module.exports = (plugin) => {  
    plugin.middlewares['jwt'] = jwt
    return plugin;
  };