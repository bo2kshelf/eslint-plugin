module.exports = {
  extends: ['plugin:@bo2kshelf/typescript', 'plugin:@bo2kshelf/prettier'],
  overrides: [
    {
      files: ['src/**/*.module.ts'],
      rules: {
        '@typescript-eslint/no-extraneous-class': [0],
      },
    },
    {
      files: ['src/**/*.config.ts'],
      rules: {
        'no-process-env': [0],
      },
    },
  ],
};
