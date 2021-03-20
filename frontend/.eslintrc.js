module.exports = {
    'env': {
      'browser': true,
      'es2020': true,
      'node': true,
      'jest': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'ecmaVersion': 11,
      'sourceType': 'module'
    },
    'plugins': [
      'react'
    ],
    'rules': {
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'never'
      ],
      'max-len': [
        'error',
        91
      ]
    }
  }
  