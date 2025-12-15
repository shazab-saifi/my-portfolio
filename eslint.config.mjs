import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      indent: ['error', 2],
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      '.husky/**',
      '.vscode/**',
      'bun.lock',
      'package-lock.json',
      'postcss.config.mjs',
      'README.md',
      'tsconfig.json',
    ],
  },
];
