'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/auth/logout',
    handler: 'auth.logout',
    config: {
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
];
