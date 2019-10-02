module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!/node_modules/',
    '!src/**/index.tsx',
    '!src/index.tsx',

  ],
  setupFilesAfterEnv: ['<rootDir>/enzymeSetUp.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^config/(.*)': '<rootDir>/src/config/$1',
    '^services/(.*)': '<rootDir>/src/services/$1',
    '^layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^.+\\.scss$': 'identity-obj-proxy',
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
