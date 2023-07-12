/** @type {import('next').NextConfig} */


const nextConfig = {
  distDir: 'out',
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
}

module.exports = nextConfig
