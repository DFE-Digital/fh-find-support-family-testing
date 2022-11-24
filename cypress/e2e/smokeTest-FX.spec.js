describe('smokeTest-FX.spec',function(){
    it('basic e2e journey - Start now page - page title ',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("a[role='button']").click()
        cy.contains('Search for local family support and services')
        // back button
        cy.get('.govuk-back-link').click()
        cy.homepage();
        cy.get("a[role='button']").click()
        cy.contains('Search for local family support and services')
        // click on page title 
        cy.get('.govuk-header__content').contains('Find local family support').click()
        cy.homepage();

    })
})