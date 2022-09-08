describe('Homepage Test',function(){
    
    it('Landing page',function(){
        cy.visit('/');
        cy.contains('This is a prototype used for research');
        cy.get('input#password').click().type('family');
        cy.get('.govuk-button').click();
        cy.get('.govuk-heading-xl').contains('Family experience');
    })
    it('MVP1',function(){

    })
    it('MVP2',function(){
        
    })
    
})