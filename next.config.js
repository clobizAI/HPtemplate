/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en', 'zh-Hant'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['www.hyogobtc.com.hk'],
  },
}

module.exports = nextConfig 