module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
};
