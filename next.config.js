/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

// module.exports = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'rb.gy',

//             },
//             {
//                 protocol: 'https',
//                 hostname: 'image.tmdb.org',
//                 port: '',
//                 pathname: '/t/p/**',
//             },
//         ],
//     },
// };
module.exports = {
    images: {
        domains: ['image.tmdb.org', 'rb.gy'],
    },
};
