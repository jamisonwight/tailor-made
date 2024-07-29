var path = require('path');
var glob = require('glob');

module.exports = {
    entry:   ['./assets/scripts/js/main.js', './assets/styles/scss/style.scss'],
    output: { 
      publicPath: '/',
      path: path.resolve(__dirname, './dist'),  
      filename: "main.js",
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'stage-3']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: './css/',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'resolve-url-loader',
                    },

                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader'
                  }
                ]
            },
            {    
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['url-loader']
            },
            {
                test: /\.(webm|mp4)$/,
                loader: 'url-loader'
            },
            {
                test: require.resolve('scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js'),
                loader: 'imports-loader?define=>false'
            }, 
            {
                test: require.resolve('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
                loader: 'imports-loader?define=>false'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname), path.resolve(__dirname, "node_modules")],
        alias: {
          images: path.join(__dirname, './assets/images'),
          fonts: path.join(__dirname, './assets/fonts')
        }
      },
    node: {
      fs: "empty"
    },
}