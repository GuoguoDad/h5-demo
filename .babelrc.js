module.exports = {
　　"presets": [
      "@babel/preset-env",
      ['@babel/preset-react',{ 'runtime': 'automatic',}],
      "@babel/preset-typescript"
    ],
    "plugins": [
      "@babel/plugin-proposal-function-bind",
      "@babel/plugin-syntax-dynamic-import",
      ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": true}]
    ]
}
