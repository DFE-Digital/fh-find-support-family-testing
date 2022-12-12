describe('FHG-957-FX-filter-transport.spec.js',function(){
    it('AC 1,2 - Transport category filter ',function(){

     cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M27 8ss')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // transport filter
        cy.transportFilter()
        // add validations 
         cy.noResultsFilter()
    })
})