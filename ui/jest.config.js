module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  testEnvironment: "./test.environment.js",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
