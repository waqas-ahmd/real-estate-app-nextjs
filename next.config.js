/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "img.icons8.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
