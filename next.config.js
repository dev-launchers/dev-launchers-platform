const withImages = require("next-images");
module.exports = withImages({
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/meet",
        destination: "/hangout",
        permanent: true,
      },
    ];
  },

  webpack5: false, // so far it breaks because of next-images package. In Next.js 10.2
  // version, webpack 5  didnt work because of "idea generator button" and its plugins like "natural"
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // we have too many errors if you run npm run lint ,but after bug fixes we could enforce this.
    ignoreDuringBuilds: true,
  },
});
