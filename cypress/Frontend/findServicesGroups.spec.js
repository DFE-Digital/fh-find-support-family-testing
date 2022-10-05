describe('findServicesGroups Test',function(){
    it('Find services or groups page',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("[class] .govuk-grid-column-one-half:nth-of-type(2) .nhsuk-action-link__text").click();
        cy.contains('Find services or groups');
    });
})