module.exports = {
  "extends": [
    "@react-native-community",
  ],
  "rules": {
    //Best Practices
    eqeqeq: [2, 'always', {null: 'ignore'}],
    'no-var': 2,
    'prefer-const': 2,


    // Stylistic Issues
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],

    // React
    'react/no-string-refs': 1,
    'react/prop-types': [1, {ignore: []}],
    'react/jsx-uses-vars': 2,
    'react/jsx-sort-default-props': 1,
    'react/sort-prop-types': [
      1,
      {ignoreCase: false, callbacksLast: false, requiredFirst: false},
    ],

    // React hooks
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': [
      2,
      {
        additionalHooks: 'useCode',
      },
    ],

    //React Native
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    "react-native/split-platform-components": 2,
  }
};
