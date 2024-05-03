// FHG-1897-betaBanner.spec
describe('FHG-1897-betaBanner.spec',function(){
    it('beta banner + feedback link',function(){
        cy.visit('/')
        cy.feedbackLink()  
        
        cy.get('.govuk-grid-column-two-thirds > .govuk-button').click();
        cy.searchHubsPage()
        cy.feedbackLink()
        cy.searchbypostcode('m6 5uj')
        cy.feedbackLink()
        cy.serviceFilterPage();
        cy.feedbackLink()
       
    })
})