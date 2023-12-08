// @ts-check
const path = require('path');
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: ['@devlaunchers/components'],
  compiler: {
    styledComponents: {
      cssProp: true,
      ssr: true,
      minify: true,
    }
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.resolve.alias['styled-components'] = path.resolve("../../node_modules", "styled-components");
    return config
  }
}

module.exports = nextConfig
