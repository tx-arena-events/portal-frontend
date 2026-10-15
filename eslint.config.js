import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@mui/material', '@mui/material/*'],
              message: 'Import MUI components from libs/mui instead.',
            },
            {
              group: ['@catena-x/portal-shared-components'],
              message: 'Only libs/mui may use portal-shared-components.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['libs/mui/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
])
