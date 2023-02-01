module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/react-in-jsx-scope': ['off'],
    'arrow-body-style': ['error', 'never'],
    'arrow-body-style': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
