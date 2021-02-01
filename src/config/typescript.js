module.exports = {
  extends: ['plugin:@shopify/typescript'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/array-type': [2, {default: 'array'}],
    'import/order': [0],
  },
};
