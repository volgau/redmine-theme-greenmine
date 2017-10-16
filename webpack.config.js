var ExtractTextPlugin = require ('extract-text-webpack-plugin');

var extractSCSS1 = new ExtractTextPlugin ('./stylesheets/application_override.css');
var extractSCSS2 = new ExtractTextPlugin ('./stylesheets/context_menu_override.css');
var extractSCSS3 = new ExtractTextPlugin ('./stylesheets/responsive_override.css');

module.exports = {
    entry: {
        theme: './src/js/theme'
    },
    output: {
        filename: 'javascripts/[name].js'
    },
    module: {
        rules: [
            {
                test: /application_override\.scss$/,
                use: extractSCSS1.extract (['css-loader', 'sass-loader'])
            },
            {
                test: /context_menu_override\.scss$/,
                use: extractSCSS2.extract (['css-loader', 'sass-loader'])
            },
            {
                test: /responsive_override\.scss$/,
                use: extractSCSS3.extract (['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        extractSCSS1, 
        extractSCSS2,
        extractSCSS3
    ]
};