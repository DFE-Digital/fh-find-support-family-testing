describe('FHG-749-FX-searchResultsPage.spec',function(){
    it('AC 1 ,2 search results page - family hubs + services or groups within my Local Authority area + back link',function(){
        cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
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
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // back button 
        cy.get('main#main-content > div:nth-of-type(1) a').contains('M6 5UJ').click();
        cy.searchHubsPage();
    });
    

})