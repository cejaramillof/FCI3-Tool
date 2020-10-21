module.exports = {
  verbose: false,
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/**/*.stories.js'
  ],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 75,
      lines: 65,
      statements: 65,
    },
  }
};