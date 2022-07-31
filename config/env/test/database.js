module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', 'integration-test/data.db'),
        schema: false,
      },
      useNullAsDefault: true,
    },
  });