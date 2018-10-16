const path = require('path');

module.exports = {
  entry: './client/src/index.js', // where wp starts looking for files
  output: { // where wp puts the bundle
    path: path.resolve(__dirname, 'client/dist'), // what folder
    filename: 'bundle.js' // what filename
  }, // wp puts bundle at ./dist/bundle.js
  module: {
	  rules: [
	    {
	      test: /\.jsx?$/, // Take out the m? after \ if you want. Which files should this loader run on? Regular exp that means .js or .jsx
	      exclude: /(node_modules)/, // don't transpile node_modules. Removed | and bower after node_modules
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'] // translates es6 to es5
	        }
	      }
	    },
	    {
		  test: /\.css$/,
		  use: ['style-loader', 'css-loader']
		}
	  ]
	},
	mode: 'development'
};