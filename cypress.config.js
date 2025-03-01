const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.automationexercise.com/',
    chromeWebSecurity : false,
    watchForFileChanges : false,
    specPattern : 'cypress/e2e/**/*.cy.js',
    reporter: 'cypress-mochawesome-reporter',
    // pageLoadTimeout : 90000,
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    //pageLoadTimeout:10000ms --> 10s, 
    //screenshotOnRunFailure : filelocation
  },
});
