module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },

  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],

  plugins: [],

  rules: {
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: true },
    ],
  },
};
