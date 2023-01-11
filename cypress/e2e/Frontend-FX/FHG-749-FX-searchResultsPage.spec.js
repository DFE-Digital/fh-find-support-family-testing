describe('FHG-749-FX-searchResultsPage.spec',function(){
    it('AC 1 ,2 search results page - family hubs + services or groups within my Local Authority area + back link',function(){
        cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // back button 
        cy.get('.govuk-back-link').click();
        cy.searchHubsPage();
    });
    it('AC 3 search results page - post code link ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // back button 
        cy.get('.govuk-grid-column-two-thirds > .govuk-caption-m').contains('E1 2EN').click();
        cy.searchHubsPage();
    });
    

})