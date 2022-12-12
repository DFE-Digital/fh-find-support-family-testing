// ***********************************************
/* eslint-disable max-len */

// before each hook with clearing cookies + uncaught exception override
beforeEach(() => {
  cy.clearCookies();
    Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
  Cypress.Commands.add('homepage',()=>{
    cy.contains('Find local family support and services');
    cy.contains('You can find help, services and activities in your local area, including:');
  })
  Cypress.Commands.add('searchHubsPage',()=>{
    cy.contains('Search for local family support and services')
    cy.contains('Use your postcode to find support, activities and services for:')
  })
  Cypress.Commands.add('ServiceFilterPage',()=>{
    cy.contains('Your local family hubs, services and activities')
    cy.get('.app-family-hub').should('be.visible')
    cy.contains("Below are the nearest search results for services and groups in your area. These may take place at different locations, like family hubs, children's centres or community centres.")
    cy.get('.govuk-summary-list__row').contains('Service and groups')
    cy.get('.moj-filter').should('be.visible')
  })
  Cypress.Commands.add('familyHubDetails',()=>{
    cy.get('.app-family-hub').contains('This is your nearest family hub. You can drop in, meet others and find general services and activities in your area.')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(1) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(2) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(3) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(4) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(5) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .govuk-summary-list.govuk-summary-list--no-border > div:nth-of-type(6) > .govuk-summary-list__value').should('be.visible')
  })
  Cypress.Commands.add('serviceDetails',()=>{
    cy.get('.app-family-hub').contains('This is your nearest family hub. You can drop in, meet others and find general services and activities in your area.')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(1) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(2) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(3) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(4) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(5) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(6) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(7) > .govuk-summary-list__value').should('be.visible')
    cy.get('.govuk-grid-column-two-thirds > dl:nth-of-type(1) > div:nth-of-type(8) > .govuk-summary-list__value').should('be.visible')
    
    
  })

  Cypress.Commands.add('searchbypostcode', (postcode) => {
    cy.get('input#postcode').clear().type(postcode);
    cy.get('.govuk-button').click();
})
// Cost filter
Cypress.Commands.add('costFilter',(selection)=>{
    cy.contains('Your local family hubs, services and activities')
    if (selection === 'Free') {
    cy.get("input#cost--free").check();
    cy.get('div#filters > .govuk-button').click()
  } else if (selection === 'Paid'){
    cy.get('input#cost--pay-to-use').check()
    cy.get('div#filters > .govuk-button').click()
  }
  else if (selection === 'Both'){
    cy.get("input#cost--free").check();
    cy.get('input#cost--pay-to-use').check()
    cy.get('div#filters > .govuk-button').click()
  }
   })
Cypress.Commands.add('clearFilters',()=>{
  cy.get("p > button[name='remove']").click()
})


// custom command to overwrite baseUrl if we are using localhost etc
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const space = Cypress.env('SPACE');
  const basicAuthEnabled = Cypress.env(`${space}_BASIC_AUTH`) === true ||
    Cypress.env(`${space}_BASIC_AUTH`) === 'true';

  options = options || {};

  if (basicAuthEnabled) {
    options.auth = {
      username: Cypress.env(`${space}_BASIC_USERNAME`),
      password: Cypress.env(`${space}_BASIC_PASSWORD`),
    };
  }

  return originalFn(url, options);
});


//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })