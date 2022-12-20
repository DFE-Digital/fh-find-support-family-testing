describe('FHG-954-FX-filter-catHealth.spec',function(){
    it('Health filters - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();

        //'Hearing and sight','Nutrition and weight management','Oral health','Public health services','Mental health, social and emotional support',
       let subcategories = ['Mental health','Public health services',]
       let subcatcode = ['2','5']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter2('3',`${subcatcode[i]}`,`${subcategories[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        // use clear filers 
        cy.clearFilters()

       }
        // 

    });
    

})