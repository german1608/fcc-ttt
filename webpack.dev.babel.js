import common from './webpack.common.babel'
import merge from 'webpack-merge'
import webpack from 'webpack'

export default merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    // The following 2 lines enable to check it via IP
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
