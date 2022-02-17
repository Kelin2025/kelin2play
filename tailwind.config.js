const isProduction = process.env.NODE_ENV !== 'development'

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    // Theme is stored in shared/ui
    extend: require('./src/shared/ui/tailwind.theme.js'),
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
