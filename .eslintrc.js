module.exports = {
  overrides: [
    {
      files: ['./packages/icon-vue/**/*.vue'],
      extends: ['@mario34/eslint-config-vue3'],
    },
    {
      files: ['./packages/icon-site/**/*.vue'],
      extends: ['@mario34/eslint-config-vue3'],
    },
    {
      files: ['./packages/icon-react/**/*.tsx'],
      extends: ['@mario34/eslint-config-react'],
    },
    {
      files: ['./packages/**/*.ts'],
      extends: ['@mario34/eslint-config-ts'],
    },
    {
      files: ['**/*.js'],
      extends: ['@mario34/eslint-config-base'],
      rules: {
        'no-console': 'off',
        'global-require': 'off',
      },
    },
  ],
}
