const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {      
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.vr.com.br',
  }
});