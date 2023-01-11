describe('smokeTest-FX.spec',function(){
    it('e2e journey - Start now page - page title ',function(){
        cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
    })
})