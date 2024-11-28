const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Обработка CSS
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // Плагин для работы с .vue файлами
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Указываем шаблон HTML
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", // Убедитесь, что используете правильную версию Vue
    },
    extensions: [".js", ".vue"], // Расширения по умолчанию
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
  },
};
