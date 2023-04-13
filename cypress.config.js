const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
     'baseUrl': 'https://test.find-support-for-your-family.education.gov.uk/',
    'specPattern': ['**/*.cy.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       return config;
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
});