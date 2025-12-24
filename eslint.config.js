import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  prettierPlugin,
  {
    settings: {
      react: {
        version: 'detect', // 설치된 React 버전을 자동으로 탐지합니다
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          printWidth: 80,
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
    },
  },
]);
