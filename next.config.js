const withPWA = require('next-pwa')
const nextTranslate = require('next-translate')

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    FACEBOOK_LINK: "https://www.facebook.com/vinoroshop",
    INSTAGRAM_LINK: "https://www.facebook.com/vinoroshop",
    VIBER_LINK: "https://www.facebook.com/vinoroshop"
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
