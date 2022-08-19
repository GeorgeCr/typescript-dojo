/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js?$": "babel-jest",
  },
};
