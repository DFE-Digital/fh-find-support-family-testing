describe('FHG-937-FX-filter-activities.spec',function(){
    it('AC 1 - Activities, clubs and groups - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // activities filter 
        cy.activitiesFilter('3','2')
        
    });
    

})