const path = require('path')

module.exports = {
  "extends": [
      "react-app",
      "airbnb"
  ],
  "settings": {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    },
  },
  rules: {
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-unused-vars": 1
  }
};