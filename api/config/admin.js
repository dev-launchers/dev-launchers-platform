// https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/admin-panel.html#available-options
module.exports = ({ env }) => ({ 
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9Yh3^gMZbeT6G4jR8R$2syN&'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'y3a45zNWq%c%5J4WSM6znTF&'),
  },
});
