describe('test-e2e.spec',function(){
    it('Landing page main content validation',function(){
        cy.visit('/');
        cy.homepage();
    })
})