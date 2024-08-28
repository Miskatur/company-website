/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'admin.axilsoft.com',
          port: '',
          pathname: '/**',
        },
        {
          hostname : "localhost"
        }
      ],
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
  