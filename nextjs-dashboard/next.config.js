/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["gc8tw3-3000.csb.app"],
        }
    },
};

module.exports = nextConfig;
