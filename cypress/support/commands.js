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
    cy.get('.govuk-button.govuk-button--start').click();
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

// search by postcode
  Cypress.Commands.add('searchbypostcode', (postcode) => {
    cy.get('input#postcode').clear().type(postcode);
    cy.get('.govuk-button').contains('Search').click();
})
// no results for postcode
Cypress.Commands.add('noResultsPage',()=>{
  cy.contains('No results found')
  cy.contains('Sorry, there are no family hubs or services listed in your area yet.')
  cy.contains('You can check your council’s website for your local family support services.')
  cy.get(':nth-child(3) > a').click()
  cy.contains('Find your local council')
  cy.go(-1)
})
// no results for filter
Cypress.Commands.add('noResultsFilter',()=>{
  cy.contains('Try another search')
  cy.contains('You may get more results if you change the:')
  cy.contains('age range')
  cy.contains('distance to search within')
  cy.contains('type of support')
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
// clear filters
Cypress.Commands.add('clearFilters',()=>{
  cy.get("p > button[name='remove']").click()
})
// familyhubs filter
Cypress.Commands.add('familyhubsFilter',(selection)=>{
    cy.contains('Your local family hubs, services and activities')
    if (selection === 'familyhubs') {
    cy.get("input#show--3").check();
    cy.get('div#filters > .govuk-button').click()
  } else if (selection === 'services'){
    cy.get('input#show--1').check()
    cy.get('div#filters > .govuk-button').click()
  }
  else if (selection === 'Both'){
    cy.get("input#show--3").check();
    cy.get('input#show--1').check()
    cy.get('div#filters > .govuk-button').click()
  }
   })
  // transport filter 
Cypress.Commands.add('transportFilter',()=>{
  cy.get("input[name='transport']").check()
  cy.get('div#filters > .govuk-button').click()
})
// dfe branding 
Cypress.Commands.add('dfeBranding',()=>{
  cy.get('.govuk-header__logo').contains('Department for Education').click()
  cy.contains('Department for Education')
  cy.go(-1)
  cy.get('.govuk-header__logo').contains('Find support for your family').click()
  cy.contains('Find local family support and services')

})
// dfe branding mobile
Cypress.Commands.add('dfeBrandingMobile',()=>{
  cy.get('.govuk-header__logo').contains('Department for Education')
  cy.get('.govuk-header__logo').contains('Find support for your family')
})
Cypress.Commands.add('distanceFilter',(selection)=>{
    cy.get(`input#search_within--${selection}`).check();
    cy.get('div#filters > .govuk-button').click()
})

// activities filter
Cypress.Commands.add('activitiesFilter',(selection1,selection2)=>{
   cy.get(`:nth-child(${selection1}) > .govuk-fieldset > .govuk-checkboxes > :nth-child(${selection2}) > .govuk-label`,{ multiple: true }).click()
    cy.get('div#filters > .govuk-button').click()
})
//cy.get('#family-support--f11a9fdd-de48-499a-ac2d-2bd01dfc22f1')
// activities filter 2
Cypress.Commands.add('activitiesFilter2',(selection1,selection2,selection3)=>{
   cy.get(`:nth-child(${selection1}) > .govuk-fieldset > .govuk-checkboxes > :nth-child(${selection2}) > .govuk-label`,{ multiple: true }).contains(`${selection3}`).click()
    cy.get('div#filters > .govuk-button').click()
})


// find item using pagination
Cypress.Commands.add('findItem',(pageNumber)=>{
  cy.get(`:nth-child(${pageNumber}) > .govuk-link`).click()
  // cy.get(`[value="${pageNumber}"]`)
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