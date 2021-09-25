module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  // extends: ['@nuxtjs', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  // rules: {
  //   'no-console': 0,
  //   'comma-dangle': ['error', 'only-multiline'],
  // },
  rules: {},

  globals: {
    _: true,
  },
}
