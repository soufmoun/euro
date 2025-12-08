// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the 'experimental: { appDir: true }' option
  // appDir is enabled by default in Next.js 13+ when using the App Router
  
  // Optional: TypeScript configuration
  typescript: {
    // Set to true to ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
  
  // Optional: ESLint configuration
  eslint: {
    // Set to true to ignore ESLint errors during build
    ignoreDuringBuilds: false,
  },
  
  // Optional: Image optimization configuration
  images: {
    // Add external domains if you're loading images from external sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Optional: Webpack configuration to handle fs module
  webpack: (config, { isServer }) => {
    // If client-side, don't try to import fs
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
