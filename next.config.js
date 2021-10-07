const path = require('path');

const config = {
  exclude: path.resolve(__dirname, 'images/svg/'),
  webpack(webpackConfig) {
    webpackConfig.module.rules.push({
      // eslint-disable-next-line
      test: /\.svg$/,
      issuer: {
        // eslint-disable-next-line
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };
    webpackConfig.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...webpackConfig.resolve.extensions,
    ];

    return webpackConfig;
  },
};

module.exports = config;
