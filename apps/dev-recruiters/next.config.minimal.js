/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/',
        destination: 'https://devlaunchers.org/',
        basePath: false,
      },
      {
        source: '/create',
        destination: 'https://devlaunchers.org/create',
        basePath: false,
      },
      {
        source: '/learn',
        destination: `https://devlaunchers.org/learn`,
        basePath: false,
      },
      {
        source: '/support-us',
        destination: `https://devlaunchers.org/support-us`,
        basePath: false,
      },
    ];
  },

  images: {
    domains: [
      'images.prismic.io',
      'devlaunchersproduction.blob.core.windows.net',
      'devlaunchersstaging.blob.core.windows.net',
      'lh3.googleusercontent.com',
      'localhost',
      'apiv4-staging.devlaunchers.org',
      'apiv4.devlaunchers.org',
    ],
    disableStaticImages: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
