const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: "./src/index.js", // string | object | array
    // Here the application starts executing
    // and webpack starts bundling
    
    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "bundle.js", // string
        // the filename template for entry chunks

        /* Advanced output configuration (click to show) */

        /*please modify here with your absolute path*/
       // publicPath:'/Users/zm/work/projects/github/webpack-static-website-demo/dist/',
  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                    }, {
                        loader: "postcss-loader"
                    }]
                })
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        // ignoreCustomFragments: [],
                        // root: path.resolve(__dirname, 'src'),
                        // attrs: ['img:src']
                    }
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit:10,
                    name: '[name].[ext]',
                },
            },
           
        ]
    },
    plugins: [
        // 生成独立css文件
        new ExtractTextPlugin({
            filename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")//new 一个这个插件的实例，并传入相关的参数
        }),
        //new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: [path.resolve(__dirname, "dist")],
        inline: true,
    },
    watch: false
    /* Advanced configuration (click to show) */
}