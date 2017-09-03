import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const common = {
  entry: './src/js/app.js',
  // el output en un solo archivo
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module.rules contiene las reglas o mandatos que ejecutara webpack cada vez que lo ejecutemos
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
}

export default common
