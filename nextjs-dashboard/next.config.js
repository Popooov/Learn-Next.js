/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["3y33wd-3000.csb.app"],
        }
    },
};

module.exports = nextConfig;
