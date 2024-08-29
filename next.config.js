/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "company-website-one-theta.vercel.app"
      },
      {
        protocol: 'http',
        hostname: 'admin.axilsoft.com',
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
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack(config, options) {
    // Add a rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
