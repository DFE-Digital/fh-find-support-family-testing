describe('FHG-749-FX-searchResultsPage.spec',function(){
    it('AC 1 ,2 search results page - family hubs + services or groups within my Local Authority area + back link',function(){
        cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
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
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // back button 
        cy.get('.govuk-grid-column-two-thirds > .govuk-caption-m').contains('M6 5UJ').click();
        cy.searchHubsPage();
    });
    it('service links to open in new window',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        cy.get(':nth-child(4) > .govuk-summary-list__value > a').contains('Central Family Hub ')
        cy.get(':nth-child(4) > .govuk-summary-list__value > a').should("have.attr", "href").and("include", "https://familyhubsnetwork.com/hub/central-family-hub-salford/");
        

    })
    

})