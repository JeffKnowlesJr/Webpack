module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: 'prettier',
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  },
};
