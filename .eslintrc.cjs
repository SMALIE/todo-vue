module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'consistent-return': 2,
    indent: [1, 2],
    'no-else-return': 1,
    semi: [1, 'always'],
    'space-unary-ops': 2,
  },
};
