
const env = process.env.NODE_ENV;

const flags = {
    useLiveData: {
        always: true,
    },
    inDevelopment: env === 'development',
    inStaging: env === 'staging',
    inProduction: env === 'production',
}

export const featureFlags = flags;