// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint', // 참고: https://bit.ly/35OgKDn
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
}
