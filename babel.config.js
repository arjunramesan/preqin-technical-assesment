// babel.config.js
module.exports = {
    presets: [
      '@babel/preset-env',
      ["@babel/preset-react", {"runtime": "automatic"}],
      '@babel/preset-flow',
      '@babel/preset-typescript'
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
    ]
  }