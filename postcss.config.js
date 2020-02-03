const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const tailwindCSS = require('tailwindcss');
const postCSSPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport({
      plugins: [stylelint],
    }),
    tailwindCSS('./tailwind.config.js'),
    postCSSPresetEnv({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
      },
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    }),
  ],
};
