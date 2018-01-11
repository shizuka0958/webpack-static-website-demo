const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        ]
    },
    plugins: [
        // 生成独立css文件
        new ExtractTextPlugin({
            filename: 'css/main.css'
        }),
    ],
    watch: false
    /* Advanced configuration (click to show) */
}