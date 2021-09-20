module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: 'images',
            name: '[name].[ext]'
          }
        }
      ]
    });
    return config;
  },
  basePath: ''
};
