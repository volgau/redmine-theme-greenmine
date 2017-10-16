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
        application_override: './src/scss/application_override.scss',
        context_menu_override: './src/scss/context_menu_override.scss',
        responsive_override: './src/scss/responsive_override.scss'
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
            filename: './stylesheets/[name].css',
            allChunks: true
        })
    ]
}

module.exports = [themeJsConfig, scssConfig]; 
