describe.skip('e2e001.FX.spec',function(){
    it('e2e journey - Start now page - page title ',function(){
        cy.visit('/');
        cy.homepage();
        cy.get('.govuk-button').click();
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.serviceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
    })
})