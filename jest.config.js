export default {
//   testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.css$': 'some-css-transformer',
  },
  testMatch: ['**/tests/**/*.test.js'],
  // ...
//   moduleFileExtensions: ['js', 'mjs'],
//   testMatch: ['**/__tests__/**/*.mjs?(x)', '**/?(*.)+(spec|mjs).mjs?(x)'],
};
