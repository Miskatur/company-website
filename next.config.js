/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['admin.axilsoft.com'],
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
  