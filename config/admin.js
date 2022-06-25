module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'jwt-secret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'token-salt'),
  },
});
