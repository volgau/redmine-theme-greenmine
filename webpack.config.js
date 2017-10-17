var ExtractTextPlugin = require ('extract-text-webpack-plugin');

var themeJsConfig = {
    entry: {
        theme: './src/js/theme'
    },
    output: {
        filename: 'javascripts/[name].js'
    }
};

var scssConfig = {
    entry: {
        application: './src/scss/application.scss',
        context_menu: './src/scss/context_menu.scss',
        responsive: './src/scss/responsive.scss'
    },
    output: {
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
            filename: './stylesheets/_[name].css',
            allChunks: true
        })
    ]
}

module.exports = [themeJsConfig, scssConfig]; 
