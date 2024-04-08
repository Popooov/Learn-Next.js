/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["nrpxzn-3000.csb.app"],
        }
    },
};

module.exports = nextConfig;
