const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out', // Change output directory for static export
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = withNextIntl(nextConfig);