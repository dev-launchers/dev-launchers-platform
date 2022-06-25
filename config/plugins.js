module.exports = ({env}) => ({
    upload: {
      providerOptions: {
      localServer: {
      }
     }
    },
    sentry: {
      enabled: true,
      config: {
        dsn: 'https://1b4a30f38ea04b9b956481f226a83e4e@o1123967.ingest.sentry.io/6372271',
        sendMetadata: true,
      }
    },
});