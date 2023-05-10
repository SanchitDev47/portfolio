/** @type {import('next').NextConfig} */
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
    // fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
    // prependData: `@import "styles/Circle";`
  },
}

module.exports = nextConfig
