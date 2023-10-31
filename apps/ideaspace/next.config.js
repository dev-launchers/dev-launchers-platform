const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@devlaunchers/components"],
  
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.resolve.alias['styled-components'] = path.resolve("./node_modules", "styled-components");
    return config
  },
  experimental: {
    externalDir: true,
    nextScriptWorkers: true,
  },
}

module.exports = nextConfig
