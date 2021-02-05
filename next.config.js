const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["localhost"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    // disable: true,
    dest: "public",
    swSrc: "service-worker.js",
  },
});
