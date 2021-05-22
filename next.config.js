const withImages = require("next-images");
module.exports = withImages({
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/meet",
        destination: "/hangout",
        permanent: true
      }
    ];
  }
});
