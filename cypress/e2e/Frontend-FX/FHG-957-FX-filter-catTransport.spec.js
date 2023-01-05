describe('FHG-937-FX-filter-activities.spec',function(){
    it('Activities, clubs and groups - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e3 4al')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        let subcategories = ['Community transport']
       let subcatcode = ['1']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter2('6',`${subcatcode[i]}`,`${subcategories[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        // use clear filers 
        cy.clearFilters()
       }

    });
    

})