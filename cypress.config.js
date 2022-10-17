const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    'baseUrl': 'https://as-fh-family-experience.azurewebsites.net/',
    // 'baseUrl': 'https://fh-family-experience-prototyp.herokuapp.com/',
    // 'baseUrl': 'http://localhost:3000/', 
    'specPattern': ['**/*.spec.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       return config;
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
});