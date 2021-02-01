module.exports = {
  extends: ['plugin:@bo2kshelf/next'],
  overrides: [
    {
      files: ['*.config.js'],
      extends: ['plugin:@bo2kshelf/node'],
    },
  ],
};
