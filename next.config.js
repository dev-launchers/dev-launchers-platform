const withImages = require("next-images");
module.exports = withImages({
  async redirects() {
    return [
      {
        source: "/meet",
        destination: "/hangout",
        permanent: true
      }
    ];
  },
  images: {
    /*
  next-images plugin is conflicting with Next.js 11 static import feature.
  see the discussion here:
  https://github.com/twopluszero/next-images/issues/73
  */
    disableStaticImages: true
  },
  webpack5: true,
  reactStrictMode: true // It helps you avoid legacy code, and deprecated APIs.
});
