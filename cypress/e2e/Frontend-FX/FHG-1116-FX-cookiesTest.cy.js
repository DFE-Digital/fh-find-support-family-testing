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
        cy.searchbypostcode('e1 2en')
        cy.cookies();
        
    });

    it(`Accept Cookies ,Hide Banner`, function() {
      cy.visit(`/`);
      cy.contains('Accept analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-accept > .govuk-button-group > .govuk-button').wait(200).click();

      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      cy.clearCookies();
    });

    it(`Reject Cookies ,Hide Banner`, function() {
      cy.visit(`/`);
      cy.contains('Reject analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-reject > .govuk-button-group > .govuk-button').wait(200).click();
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
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
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      
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
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
            // .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
      
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
        cy.searchbypostcode('e1 2en')
        cy.cookies();
        
    });

    it(`${device[i]} Accept Cookies ,Hide Banner`, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/`);
      cy.contains('Accept analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-accept > .govuk-button-group > .govuk-button').wait(200).click();

      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      cy.clearCookies();
    });

    it(`${device[i]} Reject Cookies ,Hide Banner`, function() {
      cy.viewport(`${device[i]}`)
      cy.visit(`/`);
      cy.contains('Reject analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-reject > .govuk-button-group > .govuk-button').wait(200).click();
      cy.getCookie('service_directory_cookies_policy').should('not.be.empty')
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
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
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
      // cy.getCookie('ARRAffinitySameSite')
      //       .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      
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
      cy.getCookie('ARRAffinitySameSite').should('not.be.empty')
            // .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();
      cy.clearCookies();

    });
        }
});