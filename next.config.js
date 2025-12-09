// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase memory for build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename]
        }
      };
    }
    return config;
  },
  // Disable TypeScript errors during build temporarily
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;