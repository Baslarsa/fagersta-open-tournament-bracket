/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cmp-image-store1.azureedge.net"],
  },
};

module.exports = nextConfig;
