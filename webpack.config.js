// 1.1 Import the path module to work with file and directory paths
const path = require('path');

// 1.2 Import the HtmlWebpackPlugin to simplify HTML file creation
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 1.3 Import the MiniCssExtractPlugin to extract CSS into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 1.4 Import the DotenvWebpackPlugin to load environment variables from .env file
const DotenvWebpackPlugin = require('dotenv-webpack');

// 1.5 Import the ProvidePlugin to automatically load modules
const { ProvidePlugin } = require('webpack');

// 1.6 Import the TerserPlugin for JavaScript minification
const TerserPlugin = require('terser-webpack-plugin');

// 1.7 Import the CssMinimizerPlugin for CSS minification
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// 1.8 Import the CompressionWebpackPlugin for gzip compression
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 1.9 Import the CopyWebpackPlugin to copy files and directories
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 2.1 Set the mode to 'production' for optimized output
  mode: 'production',

  // 2.2 Define the entry point of the application
  entry: './src/client/index.ts',

  // 2.3 Configure the output settings
  output: {
    // 2.3.1 Define the output file name pattern
    filename: 'js/[name].[contenthash].js',
    // 2.3.2 Set the output directory
    path: path.resolve(__dirname, 'dist'),
    // 2.3.3 Clean the output directory before building
    clean: true,
  },

  // 2.4 Configure module resolution
  resolve: {
    // 2.4.1 Define file extensions to be resolved
    extensions: ['.ts', '.js'],
    // 2.4.2 Define directories to be searched for modules
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  // 2.5 Configure module loaders
  module: {
    rules: [
      // 2.5.1 Use html-loader to process and minimize HTML files
      {
        // Match HTML files
        test: /\.html$/,
        use: 'html-loader',
      },

      // 2.5.2 Process and compile SCSS files
      {
        // Match SCSS files
        test: /\.scss$/,
        use: [
          // 2.5.2.1 Extract CSS from SCSS
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // Set publicPath for assets
              publicPath: '../',
            },
          },
          // 2.5.2.2 Process CSS imports and url()
          'css-loader',
          // 2.5.2.3 Compile SCSS to CSS
          'sass-loader',
        ],
      },
      // 2.5.3 Transpile TypeScript files
      {
        // Match TypeScript files
        test: /\.ts$/,
        // Use ts-loader to transpile TypeScript
        use: 'ts-loader',
        // Exclude node_modules from transpilation
        exclude: /node_modules/,
      },
    ],
  },

  // 2.6 Configure plugins
  plugins: [
    // 2.6.1 Simplify HTML file creation
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    }),

    // 2.6.2 Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),

    // 2.6.3 Load environment variables from .env file
    new DotenvWebpackPlugin(),
    // 2.6.4 Automatically load modules
    new ProvidePlugin({
      'window._GLOBAL': [path.resolve(__dirname, 'src/client/polyfills.ts'), 'default'],
    }),

    // 2.6.5 Minimize CSS files
    new CssMinimizerPlugin(),
    // 2.6.6 Generate gzipped versions of all build output files
    // (Github Pages uses Jekyll which supports serving gzipped files)
    new CompressionWebpackPlugin(),
    // 2.6.7 Copy files and directories from 'public' folder to the output folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
        },
      ],
    }),
  ],
  // 2.7 Configure optimization settings
  optimization: {
    // 2.7.1 Use TerserPlugin for JavaScript minification
    minimizer: [new TerserPlugin()],
    // 2.7.2 Configure code splitting settings
    splitChunks: {
      // Apply optimization to all chunks
      chunks: 'all',
      // Split any chunk larger than 244 KiB (recommended limit)
      maxSize: 244 * 1024,

      // 2.7.3 Define cache groups for splitting
      cacheGroups: {
        vendors: {
          // Match files inside node_modules
          test: /[\\/]node_modules[\\/]/,
          // Name of the generated chunk
          name: 'vendors',
          // Apply optimization to all chunks
          chunks: 'all',
        },
      },
    },
  },
  // 2.8 Configure source maps for easier debugging (disabled in production)
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  // 2.9 Configure the development server
  devServer: {
    // 2.9.1 Serve static files from the output directory
    static: {
      directory: path.join(__dirname, 'dist'),
    },

    // 2.9.2 Watch and reload the server for changes in HTML and SCSS files
    watchFiles: ['src/client/**/*.html', 'src/client/**/*.scss'],

    // 2.9.3 Enable gzip compression for server responses
    compress: true,

    // 2.9.4 Set the server port to 8080
    port: 8080,

    // 2.9.5 Enable history API fallback for single-page applications
    historyApiFallback: true,
  },
};
