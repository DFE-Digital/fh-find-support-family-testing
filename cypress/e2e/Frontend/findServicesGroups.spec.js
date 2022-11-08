describe.skip('findServicesGroups Test',function(){
    it('Find services or groups page',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("[class] .govuk-grid-column-one-half:nth-of-type(2) .nhsuk-action-link__text").click();
        cy.contains('Find services or groups');
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');
    });
})