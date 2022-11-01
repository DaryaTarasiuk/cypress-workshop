const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zven1f',
  defaultCommandTimeout: 40000,
  e2e: {
    baseUrl: 'https://store.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiURL: 'https://reqres.in'
  }
});
