const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// this is supposedly the thing that'll fix the spread operator but isn't working
// const SpreadPlugin = require("@babel/core").transform("code", {
//     plugins: ["@babel/plugin-proposal-object-rest-spread"]
//   });

module.exports = (env) => {

    const isProduction = env ='production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log("env: " + env)

return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }]

        },
        plugins: [
          CSSExtract,
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
}

