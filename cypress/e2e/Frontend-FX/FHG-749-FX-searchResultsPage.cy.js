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
    it('service links to open in new window',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        cy.get(':nth-child(4) > .govuk-summary-list__value > a').contains('South West John Smith')
        cy.get(':nth-child(4) > .govuk-summary-list__value > a').should("have.attr", "href").and("include", "https://www.towerhamlets.gov.uk/lgnl/health__social_care/children_and_family_care/Early_Help/Children-and-Family-Centres/Children-and-Family-Centre.aspx");
        

    })
    

})