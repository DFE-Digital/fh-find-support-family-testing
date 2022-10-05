const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://as-fh-family-experience.azurewebsites.net/',
    // 'baseUrl': 'https://fh-family-experience-prototyp.herokuapp.com/',
    // 'baseUrl': 'http://localhost:3000/', 
    'specPattern': ['**/*.spec.js', '**/*.feature'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
  
});