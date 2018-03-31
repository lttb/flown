'use strict'

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
  ],

  rules: {
    semi: ['error', 'never'],
    'no-unused-expressions': 'off',
    'no-multi-assign': 'off',
    'no-redeclare': 'off',

    'import/no-extraneous-dependencies': ['error', {optionalDependencies: true}],
    'import/prefer-default-export': 'off',

    'flowtype/no-unused-expressions': 'error',
    'flowtype/generic-spacing': 'off',
  },

  plugins: ['flowtype'],
}
