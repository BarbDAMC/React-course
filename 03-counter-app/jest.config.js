export default {
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
   moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
  }
}