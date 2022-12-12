describe('FHG--FX-noResultsFound.spec',function(){
    it('no family hubs or services found for postcode , link to LA , back button',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M15 4QZ')
        cy.noResultsPage()
        // back button 
        cy.get('.govuk-back-link').click();
        cy.searchHubsPage();
    });
})