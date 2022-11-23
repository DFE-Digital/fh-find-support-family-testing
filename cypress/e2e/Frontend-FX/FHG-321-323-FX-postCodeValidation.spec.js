describe.skip('FHG-321-323-FX-postCodeValidation',function(){
    it('AC 1 - No postcode entered + valid postcode',function(){
        cy.visit('/family-hub')
        cy.get('form#main-content-form > .govuk-button').click();
        cy.get('.govuk-error-summary').contains('There is a problem')
        cy.get('.govuk-error-summary').contains('You need to enter a postcode, like AA1 1AA.')
         // enter valid postcode and it takes to next page
        cy.get('input#postcode-hub').clear().type('m5 4wu')
        cy.get('form#main-content-form > .govuk-button').click();
        cy.contains('Your local family hubs')
        cy.contains('Get support from Salford family hubs.')
        cy.get('.govuk-back-link-or').click();
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');
    })
    it('AC 2 - Invalid postcode entered + valid postcode',function(){
        cy.visit('/family-hub')
        const postCode = ['abc1234','e3','12345']
        for(let i=0;i<postCode.length;i++){
            cy.get('input#postcode-hub').clear().type(`${postCode[i]}`)
            cy.get('form#main-content-form > .govuk-button').click();
            cy.get('.govuk-error-summary').contains('There is a problem')
            cy.get('.govuk-error-summary').contains('You need to enter a valid postcode, like AA1 1AA')
            // enter valid postcode and it takes to next page
            cy.get('input#postcode-hub').clear().type('m5 4wu')
            cy.get('form#main-content-form > .govuk-button').click();
            cy.contains('Your local family hubs')
            cy.contains('Get support from Salford family hubs.')
            cy.get('.govuk-back-link-or').click();
        }
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');    
    })
    it('AC 3 - Valid postcode format but not recognised + valid postcode',function(){
        cy.visit('/family-hub')
        cy.get('input#postcode-hub').clear().type('ab11 4er')
        cy.get('form#main-content-form > .govuk-button').click();
        cy.get('.govuk-error-summary').contains('There is a problem')
        cy.get('.govuk-error-summary').contains('Your postcode is not recognised - try another one')
         // enter valid postcode and it takes to next page
        cy.get('input#postcode-hub').clear().type('m5 4wu')
        cy.get('form#main-content-form > .govuk-button').click();
        cy.contains('Your local family hubs')
        cy.contains('Get support from Salford family hubs.')
        cy.get('.govuk-back-link-or').click();
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');
    })
})