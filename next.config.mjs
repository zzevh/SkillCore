/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
      'media.discordapp.net',
      'assets.aceternity.com'
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
