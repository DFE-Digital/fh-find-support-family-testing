/* eslint-disable max-len */

describe('|FHG-1116-FX-cookiesTest.spec - CookiesTest |', function() {
  it(`Cookies Main Banner `, function() {
      cy.visit(`/cookies`);
      cy.cookies();
    });

    it(`No cookies selection made`, function() {
      cy.visit(`/`);
      cy.getCookie('service_directory_cookies_policy').should('eq', null);
    });

    it(`Cookies on all pages`, function() {
      cy.clearCookies();
        cy.visit(`/`);
        cy.cookies();
        cy.homepage();
        cy.cookies();
        cy.searchHubsPage()
        cy.cookies();
        cy.searchbypostcode('m6 5uj')
        cy.cookies();
        cy.clearCookies();
        
    });

    it(`Accept Cookies ,Hide Banner`, function() {
      cy.clearCookies();
      cy.visit(`/`);
      cy.contains('Accept analytics cookies').wait(500).click().wait(500);
      cy.get('.js-cookie-banner-confirmation-accept > .govuk-button-group > .govuk-button').wait(200).click();

      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":true,"version":1}')
      cy.clearCookies();
    });

    it(`Reject Cookies ,Hide Banner`, function() {
      cy.visit(`/`);
      cy.contains('Reject analytics cookies').wait(500).click().wait(500);
      cy.get('.js-cookie-banner-confirmation-reject > .govuk-button-group > .govuk-button').wait(200).click();
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":false,"version":1}')  
      cy.clearCookies();
    });

    it(`View Cookies - Yes Selection `, function() {
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > a').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-yes').click()

      cy.get('.js-cookies-page-form > .govuk-button').click()
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":true,"version":1}')
    
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();
      cy.clearCookies();
    });

    it(`View Cookies - No Selection `, function() {
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > a').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-no').click()
      
      cy.get('.js-cookies-page-form > .govuk-button').click()
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":false,"version":1}')  
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();
      cy.clearCookies();

    });
  let device = ['iphone-x','ipad-mini','samsung-s10']
        for(let i=0;i<device.length;i++){
  
    it(`${device[i]} Cookies Main Banner `, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/cookies`);
      cy.cookies();
    });

    it(`${device[i]} No cookies selection made`, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/`);
      cy.getCookie('service_directory_cookies_policy').should('eq', null);
    });

    it(`${device[i]} Cookies on all pages`, function() {
        cy.viewport(`${device[i]}`)
        cy.clearCookies();
        cy.visit(`/`);
        cy.cookies();
        cy.homepage();
        cy.cookies();
        cy.searchHubsPage()
        cy.cookies();
        cy.searchbypostcode('m6 5uj')
        cy.cookies();
        
    });

    it(`${device[i]} Accept Cookies ,Hide Banner`, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/`);
      cy.contains('Accept analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-accept > .govuk-button-group > .govuk-button').wait(200).click();

      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
     cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":true,"version":1}')
      cy.clearCookies();
    });

    it(`${device[i]} Reject Cookies ,Hide Banner`, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/`);
      cy.contains('Reject analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-reject > .govuk-button-group > .govuk-button').wait(200).click();
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":false,"version":1}')   
      cy.clearCookies();
    });

    it(`${device[i]} View Cookies - Yes Selection `, function() {
      cy.viewport(`${device[i]}`)
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > a').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-yes').click()
      cy.get('.js-cookies-page-form > .govuk-button').click()
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('service_directory_cookies_policy')
        .should('have.property','value', '{"analytics":true,"version":1}')
    
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();
      cy.clearCookies();
    });

    it(`${device[i]} View Cookies - No Selection `, function() {
      cy.viewport(`${device[i]}`)
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > a').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-no').click()
      
      cy.get('.js-cookies-page-form > .govuk-button').click()
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();
      cy.clearCookies();

    });
        }
});