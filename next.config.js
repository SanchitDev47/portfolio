/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  generateBuildId: async () => {
    // This ensures a unique build ID for every build
    return 'build-' + Date.now();
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (distDir) {
      return defaultPathMap;
    }

    // Manually specify the output directory and index.html file
    return {
      '/': { pages: '/index.js' },
    };
  },
}

module.exports = nextConfig
