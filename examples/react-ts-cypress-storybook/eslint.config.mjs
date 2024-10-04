import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pkg from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const { react, hooks } = pkg;

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    files: ['**/*..js,jsx,mjs,cjs,ts,tsx'],
    plugins: { react, hooks },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.react
    }
  },
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  {
    ignores: ['dist', 'coverage', 'playwright/.cache', 'playwright-report']
  }
);
