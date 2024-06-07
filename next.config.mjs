/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'unsplash.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
    webpack: (config) => {
        config.externals = [...config.externals, 'bcrypt'];
        return config;
    },
};

export default nextConfig;
