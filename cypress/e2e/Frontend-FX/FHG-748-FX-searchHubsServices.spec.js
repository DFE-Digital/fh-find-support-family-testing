describe('FHG-748-FX-searchHubsServices.spec',function(){
    it('AC 1,2,4 - Page content + No postcode entered error + valid postcode',function(){
        cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.get('.govuk-button').click();
        cy.get('.govuk-error-summary').contains('There is a problem')
        cy.get('.govuk-error-message').contains('You need to enter a postcode, like AA1 1AA')
         // enter valid postcode and it takes to next page
        cy.searchbypostcode('m27 8ss')
        cy.ServiceFilterPage();
        cy.get('.govuk-back-link').click();
        // cy.go(-1)
       // back link takes back to landing page
        cy.get('.govuk-back-link').click();
        cy.contains('Find local family support and services');
    })
    it('AC 3 - Invalid postcode entered + valid postcode',function(){
        cy.visit('/PostcodeSearch')
        const postCode = ['abc1234','e3','12345','wer@r-t']
        for(let i=0;i<postCode.length;i++){
            cy.searchbypostcode(`${postCode[i]}`)
            cy.get('.govuk-error-summary').contains('There is a problem')
            cy.get('.govuk-error-summary').contains('You need to enter a valid postcode, like AA1 1AA')
            // enter valid postcode and it takes to next page
            cy.searchbypostcode('m5 4wu')
            cy.ServiceFilterPage();
            cy.go(-1)
        }
        // back link takes back to landing page
        cy.get('.govuk-back-link').click();
        cy.contains('Find local family support and services');    
    })
    it('AC 5,6 - Valid postcode format but not recognised + valid postcode',function(){
        cy.visit('/PostcodeSearch')
        cy.searchbypostcode('ab11 4er')
        cy.get('.govuk-error-summary').contains('There is a problem')
        cy.get('.govuk-error-summary').contains('Your postcode is not recognised - try another one')
         // enter valid postcode and it takes to next page
        cy.searchbypostcode('m5 4wu')
        cy.ServiceFilterPage();  
        cy.get('.govuk-back-link').click();
        // back link takes back to landing page
        cy.get('.govuk-back-link').click();
        cy.contains('Find local family support and services');
    })
})