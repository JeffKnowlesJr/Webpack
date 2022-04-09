if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    plugins: {}
  }
}

if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {}
    }
  }
}
