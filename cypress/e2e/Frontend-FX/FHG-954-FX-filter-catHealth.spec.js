describe('FHG-954-FX-filter-catHealth.spec',function(){
     //'Hearing and sight','Nutrition and weight management','Oral health','Public health services','Mental health, social and emotional support',
       let subcategories = ['Hearing and sight','Mental health, social and emotional support','Nutrition and weight management','Oral health','Public health services',]
       let subcatcode = ['1','2','3','4','5']
       for (let i=0; i< subcatcode.length; i++){
    
    it(`${subcategories[i]} - Health filters - clear filters `,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        
        cy.activitiesFilter('3',`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
}

})