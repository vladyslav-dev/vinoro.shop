const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
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
})
