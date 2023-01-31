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
    cy.contains('Find support for your family');
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
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(1) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(2) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(3) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(4) > .govuk-summary-list__value').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(5) > .govuk-summary-list__value').should('be.visible')
    
  })
  Cypress.Commands.add('mobFamilyHubDetails',()=>{
    cy.get('.app-family-hub').contains('This is your nearest family hub. You can drop in, meet others and find general services and activities in your area.')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(1) > .govuk-summary-list__key').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(2) > .govuk-summary-list__key').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(3) > .govuk-summary-list__key').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(4) > .govuk-summary-list__key').should('be.visible')
    cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(5) > .govuk-summary-list__key').should('be.visible')
    
  })
  //
  Cypress.Commands.add('serviceDetails',()=>{
    cy.get('.app-family-hub').contains('This is your nearest family hub. You can drop in, meet others and find general services and activities in your area.')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(1) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(2) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(3) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(4) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(5) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(6) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(7) > .govuk-summary-list__value').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(8) > .govuk-summary-list__value').should('be.visible')
    })
    Cypress.Commands.add('mobServiceDetails',()=>{
    cy.get('.app-family-hub').contains('This is your nearest family hub. You can drop in, meet others and find general services and activities in your area.')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(1) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(2) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(3) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(4) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(5) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(6) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(7) > .govuk-summary-list__key').should('be.visible')
    cy.get(':nth-child(3) > .govuk-summary-list > :nth-child(8) > .govuk-summary-list__key').should('be.visible')
    })
    // mobile open close filter
    Cypress.Commands.add('mobOpenCloseFilters',()=>{
      cy.get('#filters').should('be.visible')
      cy.get('#open-close-filters').click()
      cy.get('#filters').should('not.be.visible')
    })
    // feedback link
    Cypress.Commands.add('feedbackLink',()=>{
      cy.get('.govuk-phase-banner__text').contains('This is a new service, your feedback will help us improve it.')
      cy.get('.govuk-phase-banner__text > a').should("have.attr", "href").and("include", "https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_3aXYQWE1MKuhSya");
    })
  // cookies text
  Cypress.Commands.add('cookies',()=>{
     cy.contains('Cookies on Find support for your family')
      cy.contains('We use some essential cookies to make this service work.')
      cy.contains('We’d also like to use analytics cookies so we can understand how you use the service and make improvements.')
      cy.contains('Accept analytics cookies');
      cy.contains('Reject analytics cookies');
      cy.contains('View cookies');
  })
  Cypress.Commands.add('cookiesPageContent',()=>{
    cy.contains("This service puts small files (known as 'cookies') onto your computer. These cookies are used to:");
    cy.contains('Change your cookie settings')
    cy.contains('Do you want to accept analytics cookies?')
    // // back link
    // cy.get('.govuk-back-link').click()
    // cy.contains('You can find help, services and activities in your local area, including:');

  })
  // feedback page
  Cypress.Commands.add('feedbackPage',()=>{
    cy.contains('The purpose of this survey is to get your feedback on the ‘find support for your family’ website that the Department for Education has created for families and carers of young people. It should take no more than 5 minutes to complete.')
  })
  // terms and conditions page
  Cypress.Commands.add('termsandconditionsPage',()=>{
    cy.contains('Terms and conditions')
    cy.contains('Who we are')
    cy.contains('Find support for your family is managed by the Department for Education. The Department for Education will be referred to as ‘we’ from now on.')
    cy.contains('Using Find support for your family')
    cy.contains('Linking to Find support for your family')
    // back link
    cy.get('.govuk-back-link').click()
    cy.contains('You can find help, services and activities in your local area, including:');
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
  cy.get('.govuk-grid-column-two-thirds > :nth-child(3) > a').click()
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
    cy.get("input#show--true").check();
    cy.get('div#filters > .govuk-button').click()
  } else if (selection === 'services'){
    cy.get('input#show--false').check()
    cy.get('div#filters > .govuk-button').click()
  }
  else if (selection === 'Both'){
    cy.get("input#show--true").check();
    cy.get('input#show--false').check()
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
  cy.contains('Find support for your family')

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
  
  //  cy.get(`:nth-child(${selection1}) > .govuk-fieldset > .govuk-checkboxes > :nth-child(${selection2}) > .govuk-label`,{ multiple: true }).click()
  //   cy.get('div#filters > .govuk-button').click()
  cy.get(`.app-sub-filters-scrollable > :nth-child(${selection1}) > .govuk-fieldset > .govuk-checkboxes > :nth-child(${selection2}) > .govuk-label`,{ multiple: true }).click()
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

// contact us page 
Cypress.Commands.add('contactUsPage',()=>{
  cy.contains('Contact us')
  cy.contains('Email')
  cy.contains("find-family-support.service@education.gov.uk")
  cy.contains("We aim to respond within 5 working days.")
  // back link
  cy.get('.govuk-back-link').click()
  cy.contains('You can find help, services and activities in your local area, including:');
})
Cypress.Commands.add('accessibilityPage',()=>{
  cy.contains('Accessibility statement')
  cy.contains('How accessible this website is')
  cy.contains('Feedback and contact information')
  cy.contains('Reporting accessibility problems with this website')
  cy.contains('Enforcement procedure')
  cy.contains("Technical information about this website’s accessibility")
  cy.contains('Compliance status')
  cy.contains("What we\’re doing to improve accessibility")
  cy.contains('Preparation of this accessibility statement')
  // back link
  cy.get('.govuk-back-link').click()
  cy.contains('You can find help, services and activities in your local area, including:');


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