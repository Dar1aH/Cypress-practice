const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', 
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 3,
      openMode: 2
    },
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // Add custom plugins here
      return config;
    },
  },
});

