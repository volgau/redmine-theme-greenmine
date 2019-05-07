const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

var themeJsConfig = {
    mode: "production",
    entry: {
        theme: './src/js/theme'
    },
    output: {
        path: path.resolve (__dirname, 'javascripts'),
        filename: '[name].js'
    }
};

var scssConfig = {
    mode: "production",
    entry: {
        application: './src/scss/application.scss',
        context_menu: './src/scss/context_menu.scss',
        responsive: './src/scss/responsive.scss'
    },
    output: {
        path: path.resolve (__dirname, 'stylesheets'),
        // TODO: suppress JS output somehow?
        filename: '.webpack/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract (['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin ({
            filename: '_[name].css',
            allChunks: true
        })
    ]
}

module.exports = [themeJsConfig, scssConfig]; 
