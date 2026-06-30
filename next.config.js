/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig

