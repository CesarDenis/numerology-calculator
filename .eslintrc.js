module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['eslint-comments', 'prettier', 'react', 'react-hooks', 'jest'],
  rules: {
    // General
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Prettier Plugin
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 2,
  },
};
