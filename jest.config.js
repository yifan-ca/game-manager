const config = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  collectCoverageFrom: [ '**/*.(t|j)s' ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    ".module.ts",
    ".*main.ts"
  ],
};

module.exports = config;
