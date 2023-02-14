/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    // ],
    domains: [
      "images.unsplash.com",
      "facebook.com",
      "platform-lookaside.fbsbx.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
