var path = require('path')
var webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      // .set(key, value) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
	// // 服务器设置
	// devServer: {
	// 	port: 9999,
	// 	host: '0.0.0.0',
	// 	contentBase: './xpl',
	// 	compress: true,
	// 	historyApiFallback: true,
	// 	disableHostCheck: true,
	// 	// 服务器代理
	// 	proxy: {
	// 		'/api': { // 这边的/api是配置默认请求的api ，这还需要在axios实例对象中设置
	// 			target: process.env.VUE_APP_BASEURL,//服务器代理的baseUrl
	// 			ws: false,
	// 			changeOrigin: true,
	// 			pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
	// 				'^/api': ''
	// 			}
	// 		},
	// 	},
	// }
}
