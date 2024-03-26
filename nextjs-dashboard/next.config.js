/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["99wlqv-3000.csb.app"],
        }
    },
};

module.exports = nextConfig;
