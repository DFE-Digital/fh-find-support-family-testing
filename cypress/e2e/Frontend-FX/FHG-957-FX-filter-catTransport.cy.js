describe('FHG-957-FX-filter-catTransport.spec',function(){
    it('Transport - Community transport - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('bs5 0sw')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        let subcategories = ['Community transport']
       let subcatcode = ['1']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter('#transport-49',`${subcategories[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        // use clear filers 
        cy.clearFilters()
       }

    });
    

})