module.exports = {
  root: true,
  extends: [
    'plugin:@bo2kshelf/unicorn',
    'plugin:@bo2kshelf/typescript',
    'plugin:@bo2kshelf/jest',
    'plugin:@bo2kshelf/react',
    'plugin:@bo2kshelf/prettier',
  ],
  rules: {
    '@shopify/strict-component-boundaries': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: ['next-env.d.ts'],
      rules: {
        'spaced-comment': [0],
        '@typescript-eslint/triple-slash-reference': [0],
      },
    },
  ],
};
