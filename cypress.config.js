const { defineConfig } = require("cypress");
const { afterRunHook } = require('cypress-mochawesome-reporter/lib');
var configJson = require('./config.json');

var isAzurePipeline = configJson.isAzurePipeline;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
     'baseUrl': 'https://test.find-support-for-your-family.education.gov.uk/',
    'specPattern': ['**/*.cy.js', '**/*.feature','**/*.cy'],
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       on('after:run', async () => {
          if(!isAzurePipeline){
              await afterRunHook();
              return;
          }

          console.log('override after:run');
       });
       return config;
    },
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
  },
});