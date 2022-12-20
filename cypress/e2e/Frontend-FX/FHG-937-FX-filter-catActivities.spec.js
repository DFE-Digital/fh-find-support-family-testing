describe('FHG-937-FX-filter-activities.spec -  Activities, clubs and groups category',function(){
    it('AC 1 - Activities, clubs and groups - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
       // activities filter - Holiday clubs and schemes
       let subcategories = ['Activities','Before and after school clubs','Holiday clubs and schemes','Music, arts and dance','Parent, baby and toddler groups','Pre-school playgroup','Sports and recreation']
       let subcatcode = ['1','2','3','4','5','6','7']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter('1',`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        // use clear filers 
        cy.clearFilters()

       }
     });
    
})