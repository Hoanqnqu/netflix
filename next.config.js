/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'image.tmdb.org',
      //   port: '',
      //   pathname: '/t/p/original/**',
      // },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
}