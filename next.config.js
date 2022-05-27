module.exports = {
  reactStrictMode: true,
  upload: {
    config: {
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
      },
    },
  },
  images: {
    // deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
};
