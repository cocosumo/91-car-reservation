const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  console.log('env', env, 'development');
  return ({
  mode: 'development',
  plugins: [
    new Dotenv({ path: './.env.development' }),
  ],

  entry: {
    customize: './src/index.ts',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.json','.ts','.tsx' ,'.jsx'],
    fallback: {
      "fs": false,
      "path": false,
      "os": false,
      crypto: false,
    },
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/#root
          options: {
            presets: [
              ['@babel/preset-react', {
                runtime: 'automatic',
              }],
            ],

          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ],
  },
})};
