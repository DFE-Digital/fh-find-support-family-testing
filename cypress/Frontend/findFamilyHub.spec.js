describe('findFamilyHub Test',function(){
    it('Find a family hub page',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("[class] .govuk-grid-column-one-half:nth-of-type(1) .nhsuk-action-link__text").click();
        cy.contains('Find a family hub');
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');
    });
})