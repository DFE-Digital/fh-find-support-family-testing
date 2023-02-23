describe('FHG-955-FX-filter-catPregnancyBirthEarlyYears.spec',function(){
    //Pregnancy Birth and Early Years filter
       let subcategories = ['Birth registration','Early years language and learning','Health visiting','Infant feeding support (including breastfeeding)','Midwife and maternity','Perinatal mental health support (pregnancy to one year post birth)']
       let subcatcode = ['1','2','3','4','5','6']
       for (let i=0; i< subcatcode.length; i++){
    
    it(`${subcategories[i]} - Pregnancy Birth and Early Years filter - clear filters `,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('bs5 0sw')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        
        cy.activitiesFilter('4',`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
}
    

})