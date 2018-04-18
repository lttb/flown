'use strict'

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
  ],

  rules: {
    semi: ['error', 'never'],
    'semi-style': ['error', 'first'],
    'no-unused-expressions': 'off',
    'no-multi-assign': 'off',
    'no-redeclare': 'off',
    'max-len': ['error', {code: 120, ignoreComments: true}],

    'import/no-extraneous-dependencies': ['error', {optionalDependencies: true}],
    'import/prefer-default-export': 'off',

    'flowtype/no-unused-expressions': 'error',
    'flowtype/generic-spacing': 'off',
  },

  plugins: ['flowtype'],
}
