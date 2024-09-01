/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "admin.axilsoft.com"
            }
        ],

    },
};

export default nextConfig;
