module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Used to create secure sessions https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/code/backend/configuration.html#server-configuration
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  url: process.env.URL,
  proxy: true,
});
