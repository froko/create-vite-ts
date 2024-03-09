module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.eslint.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true
      }
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  ignorePatterns: ['node_modules', '.eslintrc.cjs']
};
