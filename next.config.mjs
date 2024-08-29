/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains:
    //   ['localhost', 'axilwebsite-frontend.vercel.app', 'company-website-frontend-liart.vercel.app/', 'http://localhost'],
    remotePatterns: [
      {
        hostname: "company-website-one-theta.vercel.app"
      },
      // {
      //   protocol: 'http',
      //   hostname: 'admin.axilsoft.com',
      //   port: '',
      //   pathname: '/**',
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        hostname: "localhost"
      },
      {
        hostname: "company-website-frontend-liart.vercel.app"
      },

    ],

  },
};

export default nextConfig;
