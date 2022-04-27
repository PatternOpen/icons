module.exports = {
  extends: ['@mario34/eslint-config-base'],
  rules: {
    'global-require': 'off',
  },
  overrides: [
    {
      files: ['packages/icon-vue/**/*.vue'],
      extends: ['@mario34/eslint-config-vue3'],
    },
    {
      files: ['packages/*.ts'],
      extends: ['@mario34/eslint-config-ts'],
    },
    {
      files: ['./scripts/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
}
