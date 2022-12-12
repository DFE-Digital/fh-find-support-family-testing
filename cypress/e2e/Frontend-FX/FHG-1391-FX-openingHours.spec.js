describe('FHG-1391-FX-openingHours.spec',function(){
    it('when / opening hours',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 0ne')
        cy.get('dl:nth-of-type(2) > div:nth-of-type(3) > .govuk-summary-list__value').should('not.be.empty')
    })
})