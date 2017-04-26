var webpack = require("webpack");

module.exports = {
	entry:"./app/App.js",
	output:{
        filename:"public/bundle.min.js"	
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
	module:
		  {
			loaders:[
		      {
		       test:/\.jsx?$/,
		       exclude:/(node_modules|bower_components)/,
		       loader:"babel-loader",
               query: {presets:['es2015','react']}
		      }
			]
		  }
};
