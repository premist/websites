const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "o.polychrome.network",
        pathname: "/temp/**",
      },
    ],
  },
  output: "standalone",
  swrDelta: 60,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  // transpilePackages: ["@repo/ui"],
  // output: "export"
};
