describe('FHG-955-FX-filter-catPregnancyBirthEarlyYears.spec',function(){
    it('Pregnancy Birth and Early Years filter - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // 'Birth registration','Early years language and learning','Health visiting','Infant feeding support (including breastfeeding)','Midwife and maternity','Perinatal mental health support (pregnancy to one year post birth)'

       //Pregnancy Birth and Early Years filter
       let subcategories = ['Health visiting','Infant feeding support (including breastfeeding)']
       let subcatcode = ['3','4']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter2('4',`${subcatcode[i]}`,`${subcategories[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        // use clear filers 
        cy.clearFilters()
       }

    });
    

})