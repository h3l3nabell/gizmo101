module.exports = {
    transform: {
       "^.+\\.(js|jsx)$": "babel-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/service-worker\\.js$"]
  };