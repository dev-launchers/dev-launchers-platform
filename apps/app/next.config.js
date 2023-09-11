const path = require('path');
const withPlugins = require('next-compose-plugins');
const imagesPlugin = require('next-optimized-images');
const withTM = require('next-transpile-modules')([
  '@devlaunchers/ideaspace',
  '@devlaunchers/site-projects',
  '@devlaunchers/dev-recruiters',
  '@devlaunchers/website',
]); // pass the modules you would like to see transpiled

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/meet',
        destination: '/hangout',
        permanent: true,
      },
    ];
  },
  images: {
    /*
      next-images plugin is conflicting with Next.js 11 static import feature.
      see the discussion here:
      https://github.com/twopluszero/next-images/issues/73
    */
    domains: [
      'images.prismic.io',
      'devlaunchersproduction.blob.core.windows.net',
      'lh3.googleusercontent.com',
    ],
    disableStaticImages: true,
    unoptimized: false
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.resolve.alias['styled-components'] = path.resolve("./node_modules", "styled-components");
    return config
  },
  reactStrictMode: true, // It helps you avoid legacy code, and deprecated APIs.
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // we have too many errors if you run npm run lint ,but after bug fixes we could enforce this.
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    externalDir: true,
    nextScriptWorkers: true,
  },
};
module.exports = withPlugins([[imagesPlugin], [withTM]], nextConfig);
