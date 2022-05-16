const withPWA = require('next-pwa')
const nextTranslate = require('next-translate')

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: false,
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
