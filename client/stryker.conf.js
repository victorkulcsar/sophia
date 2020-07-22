/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['src/**/*.js', 'src/**/*.vue'],
  mutator: "vue",
  testRunner: "jest",
  jest: {},
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off"
};

// https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs"