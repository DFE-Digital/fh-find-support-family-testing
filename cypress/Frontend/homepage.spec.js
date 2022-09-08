describe('Homepage Test',function(){
    it('Landing page',function(){
        cy.visit('/');
        cy.homepage();
    })
    it('MVP1',function(){
        cy.get('.govuk-button').contains('MVP 1').click();

    })
    it.skip('MVP2',function(){
        cy.get('.govuk-button').contains('MVP 2').click();
        
    })
    
})