describe('FHG-957-FX-filter-catTransport.spec',function(){
    it('Transport - Community transport - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        // cy.serviceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        let subcategories = ['Community transport']
       let subcatcode = ['1']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter('#transport-49',`${subcategories[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')

        // use clear filers 
        cy.clearFilters()
       }

    });
    

})