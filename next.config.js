const withPWA = require('next-pwa')
const nextTranslate = require('next-translate')

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  ...nextTranslate(),
})
