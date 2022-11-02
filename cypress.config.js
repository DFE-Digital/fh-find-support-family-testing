const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
     'baseUrl': 'https://s181t01-ca-fh-fx-web-main.jollydesert-70f88c85.westeurope.azurecontainerapps.io/',
    // 'baseUrl': 'https://s181d01-ca-fh-fx-web-dev.calmstone-6ca2c9be.westeurope.azurecontainerapps.io/',
    'specPattern': ['**/*.spec.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       return config;
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
});