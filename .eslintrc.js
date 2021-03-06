module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/no-dupe-keys": "off"
  }
}
