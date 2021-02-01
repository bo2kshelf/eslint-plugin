module.exports = {
  extends: ['plugin:@bo2kshelf/nest'],
  overrides: [
    {
      files: ['src/**/*.entity.ts'],
      rules: {
        'import/no-cycle': [0],
      },
    },
  ],
};
