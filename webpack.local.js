var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'example/demo.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'example/'),
        filename: 'demo.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.css', '.scss', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        hot: true,
        // enable HMR on the server
        contentBase: path.resolve(__dirname),
        // match the output path
        publicPath: '/'
        // match the output `publicPath`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
