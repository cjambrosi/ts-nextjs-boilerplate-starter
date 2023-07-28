const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>[/\\\\](node_modules|.next)[/\\\\]'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
    'node_modules/(?!react-query)/'
  ],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['./src/**', '!**/*.d.ts', '!./.next/**'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};

module.exports = createJestConfig(customJestConfig);
