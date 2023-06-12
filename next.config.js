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

  images: {
    // ...
    // Add the `domains` property if it's not already present
    domains: [],
  },
  // Add the `head` property if it's not already present
  head: {
    // Add the `link` property if it's not already present
    link: [
      {
        // Specify the `rel` and `href` attributes for the favicon file
        rel: 'icon',
        href: '/favicon.ico', // Replace with the path to your favicon file
      },
    ],
  },
}

module.exports = nextConfig
