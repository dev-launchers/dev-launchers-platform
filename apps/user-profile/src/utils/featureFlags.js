const env = process.env.NEXT_PUBLIC_NAME?.toLowerCase();

const flags = {
    useLiveData: {
        always: true,
    },
    env,
    inDevelopment: env === 'development',
    inStaging: env === 'staging',
    inProduction: env === 'production',
    bypassLogin: env === 'development' || env === 'staging'
}

export const featureFlags = flags;