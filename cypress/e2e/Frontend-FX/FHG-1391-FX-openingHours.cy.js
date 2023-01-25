describe('FHG-1391-FX-openingHours.spec',function(){
    it('when / opening hours',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.get('.app-family-hub > .app-service > .govuk-summary-list > :nth-child(5) > .govuk-summary-list__value').should('exist')
    })
})