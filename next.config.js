/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en', 'zh-Hant'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 