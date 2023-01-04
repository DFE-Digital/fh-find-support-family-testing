describe('test spec',function(){
    it('pagination',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m27 8ss')
        cy.get(':nth-child(5) > .govuk-summary-list__key > .govuk-heading-s')
                .invoke('text')

    })
    it.only('pagination family hubs',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m27 8ss')
        // check page for Family hub 
        // if page has Family hub then break 
        // else 
        // for ( let i=1; i<totalpages.length; i++)
        // 

    })
})