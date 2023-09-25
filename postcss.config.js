// postcss.config.js
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
            ? [
          'postcss-import',
          'tailwindcss/nesting',
          'tailwindcss',
          [
            'postcss-preset-env',
            {
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
        ]
      : [
          // No transformations in development
          'postcss-import',
          'tailwindcss/nesting',
          'tailwindcss'
        ],
}