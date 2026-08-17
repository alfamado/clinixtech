import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    settings: { react: { version: 'detect' } },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Runtime prop validation is intentionally omitted in this small JavaScript app.
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      // Closing the mobile menu after a route change is intentional UI synchronization.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];
