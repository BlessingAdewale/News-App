module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components/index.ts',
            '@constants': './src/constants/index.ts',
            '@hooks': './src/hooks/index.ts',
            '@globalStyles': './src/assets/globalStyles.ts',
            '@screens': './src/screens/index.ts',
            '@utils': './src/utils/index.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
