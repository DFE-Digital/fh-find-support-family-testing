describe('FHG-938-FX-clearFilters.spec',function(){
    it('AC 1 - clear filters',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('exist')
        // use clear filers 
        cy.clearFilters()
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
         cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')

    })
})