module.exports = {
  testMatch: ['**/__tests__/**/*.js?(x)'],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
};
