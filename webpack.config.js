const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        shared: 'lodash',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ["csv-loader"],
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
        ],
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
  };
  