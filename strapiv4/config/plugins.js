module.exports = ({env}) => ({
    upload: {
      provider: 'azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME'),
        defaultPath: 'assets',
        maxConcurrent: 10
      }
    },
    sentry: {
      enabled: true,
      config: {
        dsn: 'https://1b4a30f38ea04b9b956481f226a83e4e@o1123967.ingest.sentry.io/6372271',
        sendMetadata: true,
      }
    },
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d',
        },
        jwtSecret: env('JWT_SECRET', 'NlpLY6zZ7JON8CHyNORWKw==')
      },
    },
});