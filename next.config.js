/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kpifzufhdtskjhvmjorm.supabase.co',
      }
    ]
  }
}

module.exports = nextConfig
