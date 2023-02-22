const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/login.html'
    })
]

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: plugins,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [new HtmlWebpackPlugin()],
}


