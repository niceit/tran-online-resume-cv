module.exports = {
    lintOnSave: false,
    productionSourceMap: true,
    configureWebpack: {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@vue/app', '@babel/preset-env']
                        }
                    }
                }
            ]
        }
    },
    pluginOptions: {
        i18n: {
            locale: 'ar',
            fallbackLocale: 'ar',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}
