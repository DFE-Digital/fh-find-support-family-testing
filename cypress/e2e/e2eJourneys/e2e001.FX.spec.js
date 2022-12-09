describe('e2e001.FX.spec',function(){
    it('e2e journey - Start now page - page title ',function(){
        cy.visit('/');
        cy.homepage();
        cy.get('.govuk-button').click();
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
    })
})