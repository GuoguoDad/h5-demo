module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json}': ['npm run prettier', 'npm run stylelint', 'npm run eslint', 'git add'],
  'src/**/*.{less,css,scss}': ['npm run stylelint']
}
