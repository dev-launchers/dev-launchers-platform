const env = process.env.NODE_ENV;

const flags = {
    useLiveData: {
        always: true,
    },
    inDevelopment: env === 'development',
    inStaging: env === 'staging',
    inProduction: env === 'production',
    bypassLogin: env === 'development' || env === 'staging'
}

export const featureFlags = flags;