/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en', 'zh-Hant'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig 