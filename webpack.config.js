const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                },
            },
          ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader', {
          loader: 'image-webpack-loader',
          options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
      },
    },
  ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
    },
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
};
