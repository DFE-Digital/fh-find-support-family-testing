const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
     'baseUrl': 'https://s181t01-as-fh-sd-ui-main.azurewebsites.net/',
    'specPattern': ['**/*.spec.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       return config;
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
});